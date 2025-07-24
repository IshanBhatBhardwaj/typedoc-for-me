import {Application, RendererEvent} from 'typedoc'
import { OptionsReader, Options, Logger } from 'typedoc';
import { fileURLToPath } from 'url';
import * as fsSync from 'fs'
import * as path from 'path'

export class MyPluginOptionsReader implements OptionsReader {
  name = 'my-plugin-reader';
  order = 100; // Run before typedoc.json (which is priority 200)
  supportsPackages = true;

  read(container: Options, logger: Logger, cwd: string, usedFile: (file: string) => void): void | Promise<void> {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);    
    const customConfigPath = __dirname + "/../typedoc-plugin.json"

    if (fsSync.existsSync(customConfigPath)) {
      try {
        const data = JSON.parse(fsSync.readFileSync(customConfigPath, 'utf8'));

        for (const [key, value] of Object.entries(data)) {
          container.setValue(key, value);
        }
      } catch (err) {
        console.warn(`Failed to parse typedoc-plugin.json: ${err.message}`);
      }
    }
  }
}

class TypeDocFormatter {

  getRepoName() {
    const packageJsonPath = path.resolve(process.cwd(), 'package.json');
    const packageJson = JSON.parse(fsSync.readFileSync(packageJsonPath, 'utf-8'));

    if (packageJson.name) {
      return packageJson.name 
    }

    return path.basename(process.cwd())
  }

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
    const repoName = this.getRepoName();

    const escapedRepoName = repoName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    const pattern = new RegExp(
      `(# ${escapedRepoName}|(?<=\\[)${escapedRepoName}(?=\\]))`,
      'g'
    );

    return fileContents.replaceAll(pattern, 'API Reference');
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

  app.options.addReader(new MyPluginOptionsReader());


  app.renderer.on(RendererEvent.END, async (event) => {
    const formatter = new TypeDocFormatter()
    formatter.format(event.outputDirectory);
  });
}
