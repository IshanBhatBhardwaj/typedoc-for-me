import { OptionsReader, Options, Logger } from 'typedoc';
import fs from 'fs';
import path from 'path';

export class MyPluginOptionsReader implements OptionsReader {
  name = 'my-plugin-reader';
  order = 100; // Run before typedoc.json (which is priority 200)
  supportsPackages = true;

  read(container: Options, logger: Logger, cwd: string, usedFile: (file: string) => void): void | Promise<void> {
    const customConfigPath = path.resolve(cwd, 'typedoc.json');

    if (fs.existsSync(customConfigPath)) {
      try {
        const data = JSON.parse(fs.readFileSync(customConfigPath, 'utf8'));

        for (const [key, value] of Object.entries(data)) {
          container.setValue(key, value);
        }
      } catch (err) {
        console.warn(`[MyPlugin] Failed to parse my-plugin-config.json: ${err.message}`);
      }
    }
  }
}