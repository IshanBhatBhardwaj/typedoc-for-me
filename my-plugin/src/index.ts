import {Application, RendererEvent} from 'typedoc'
import * as fsSync from 'fs'
import * as fsAsync from 'fs/promises'
import * as path from 'path'

function readFileSafe(filePath: string): Promise<string> {
  return new Promise((resolve, reject) => {
    fsSync.readFile(filePath, "utf-8", (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

class TypeDocFormatter {
  format(outputDir: string) {
    this.renameREADME(outputDir);
    this.formatAllFiles(outputDir);
  }

  /**
   * Renames README.md to API Reference.md
   */
  renameREADME(outputDir: string) {
    const oldPath = path.join(outputDir, "README.md");
    const newPath = path.join(outputDir, "API Reference.md");
    if (fsSync.existsSync(oldPath)) {
      fsSync.renameSync(oldPath, newPath);
    }
  }

  /**
   * Formats all files in the directory tree synchronously
   */
  formatAllFiles(outputDir: string) {
    const root = path.resolve(outputDir);
    this.formatFilesRecursive(root);
  }

  /**
   * Recursively formats files in-place
   */
  formatFilesRecursive(filePath: string) {
    if (this.isDirectory(filePath)) {
      const children = this.getChildPaths(filePath);
      children.forEach((childPath) => this.formatFilesRecursive(childPath));
    } else {
      this.formatFile(filePath);
    }
  }

  isDirectory(filePath: string): boolean {
    return fsSync.statSync(filePath).isDirectory();
  }

  getChildPaths(filePath: string): string[] {
    const children = fsSync.readdirSync(filePath);
    return children.map((c) => path.join(filePath, c));
  }

  formatFile(filePath: string) {
    try {
      let fileContents = fsSync.readFileSync(filePath, "utf-8");

      fileContents = this.replaceReferencesToRepoName(fileContents);
      fileContents = this.replaceLinksToReadMe(fileContents);
      fileContents = this.removeMDExtensionFromLinks(fileContents);

      fsSync.writeFileSync(filePath, fileContents, "utf-8");
    } catch (e) {
      console.error(`Failed to format file: ${filePath}`, e);
    }
  }

  replaceReferencesToRepoName(fileContents: string): string {
    return fileContents.replaceAll(
      /(# wiki-typedoc-example|(?<=\[)wiki-typedoc-example(?=\]))/g,
      "API Reference"
    );
  }

  replaceLinksToReadMe(fileContents: string): string {
    return fileContents.replaceAll(
      /(?<=\[[^\]]*\]\([^\)]*)README(?=(?:\.md)?\))/g,
      "API%20Reference"
    );
  }

  removeMDExtensionFromLinks(fileContents: string): string {
    return fileContents.replaceAll(
      /(?<=\[[^\]]*\]\([^\)]*)\.md(?=\))/g,
      ""
    );
  }
}

export async function load(app: Application) {

app.renderer.on(RendererEvent.END, async (event) => {
  const filePath = path.join(event.outputDirectory, "Class.MaxHeap.md");

  const formatter = new TypeDocFormatter()
  formatter.format(event.outputDirectory);
});

}
