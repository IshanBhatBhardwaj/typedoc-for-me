const fsSync = require("fs");
const fsAsync = require("fs/promises");
const path = require("path");

/**
 * Formats markdown files generated with TypeDoc and TypeDoc Plugin Markdown
 * such that they can be directly included in the project wiki.
 */
class TypeDocFormatter {
  async format() {
    this.renameREADME();
    this.formatAllFiles();
  }

  /**
   * Renames README.md to APIReference.md, making the wiki page available at
   * /APIReference.
   */
  renameREADME() {
    const oldPath = path.join(__dirname, "../docs/README.md");
    const newPath = path.join(__dirname, "../docs/API Reference.md");
    fsSync.renameSync(oldPath, newPath);
  }

  /**
   * Formats files, removing .md extension from links and replacing references
   * to the repo name with "API Reference" and links to the README with links to
   * /APIReference.
   */
  formatAllFiles() {
    const awaitedOperations = [];
    const root = path.join(__dirname, "../docs");
    this.formatFilesRecursive(root, awaitedOperations);
    console.log("PROM ", awaitedOperations)
    return Promise.all(awaitedOperations);
  }

  /**
   * Recursively finds all files that require formatting and formats them
   * such that all .md extensions within links are removed, references to the
   * repo name are replaced with "API Reference" and links to the README are
   * replaced with links to APIReference.
   *
   * @remarks
   * Each formatting operation is performed asynchronously and added to an
   * array of awaitOperations so that Promise.all can be used to wait for all
   * formatting operations to finish.
   *
   * In reality, this will probably never go deeper than the root docs directory,
   * as `flattenOutputFiles` (an option made available by typedoc-plugin-markdown)
   * is set to `true` in `typedoc.json` for compatibility with the Github wiki,
   * which does not support nested pages.
   */
  formatFilesRecursive(filePath, awaitedOperations) {
    if (this.isDirectory(filePath)) {
      const children = this.getChildPaths(filePath);
      children.forEach((c) => this.formatFilesRecursive(c, awaitedOperations));
    } else {
      awaitedOperations.push(this.formatFile(filePath));
    }
  }

  isDirectory(filePath) {
    return fsSync.statSync(filePath).isDirectory();
  }

  /**
   * Finds all children of a given directory and returns paths to each.
   */
  getChildPaths(filePath) {
    const children = fsSync.readdirSync(filePath);
    return children.map((c) => path.join(filePath, "/" + c));
  }

  /**
   * Formats an individual file such that all .md extensions within links are
   * removed, references to the repo name are replaced with "API Reference" and
   * links to the README are replaced with links to APIReference.
   */
  async formatFile(filePath) {
    let fileContents = await fsAsync.readFile(filePath, "utf-8");
    fileContents = this.replaceReferencesToRepoName(fileContents);
    fileContents = this.replaceLinksToReadMe(fileContents);
    fileContents = this.removeMDExtensionFromLinks(fileContents);
    await fsAsync.writeFile(filePath, fileContents, "utf-8");
  }

  /**
   * Replaces references to the repo name ("wiki-typedoc-example") with
   * "API Reference".
   *
   * @remarks
   * References to the repo name are only replaced if they are contained in a
   * title (like `# wiki-typedoc-example`) or the text of a link
   * (like `[wiki-typedoc-example]`).
   */
  replaceReferencesToRepoName(fileContents) {
    return fileContents.replaceAll(
      /(# wiki-typedoc-example|(?<=\[)wiki-typedoc-example(?=\]))/g,
      "API Reference"
    );
  }

  /**
   * Replaces links to the README with links to the APIReference page.
   */
  replaceLinksToReadMe(fileContents) {
    return fileContents.replaceAll(
      /(?<=\[[^\]]*\]\([^\)]*)README(?=(?:\.md)?\))/g,
      "API%20Reference"
    );
  }

  /**
   * Removes the .md extension from links so that navigation works from within
   * the wiki.
   */
  removeMDExtensionFromLinks(fileContents) {
    return fileContents.replaceAll(/(?<=\[[^\]]*\]\([^\)]*)\.md(?=\))/g, "");
  }
}

const formatter = new TypeDocFormatter();
formatter.format();
