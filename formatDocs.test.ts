import fs from 'fs';
import path from 'path';

const DOCS_DIR = path.join(__dirname, '/docs');

describe('Generated docs content validation', () => {
  // let forbiddenPhrases: string[];
  let requiredPhrases: string;

  beforeAll(() => {
    // if (process.env.FORBIDDEN_PHRASE === undefined) {
    //   throw new Error(
    //     'Must define FORBIDDEN_PHRASE as a comma-separated string: PHRASE1,PHRASE2'
    //   );
    // }

    if (process.env.REQUIRED_PHRASE === undefined) {
      throw new Error(
        'Must define REQUIRED_PHRASE as a comma-separated string: PHRASE1,PHRASE2'
      );
    }

    // forbiddenPhrases = process.env.FORBIDDEN_PHRASE.split(',');
    requiredPhrases = process.env.REQUIRED_PHRASE;
  });

  const files = fs.readdirSync(DOCS_DIR);

  files.forEach((file) => {
    const filePath = path.join(DOCS_DIR, file);

    test(`"${file}" should contain required and not contain forbidden phrases`, () => {
      const content = fs.readFileSync(filePath, 'utf8');
      expect(content).toContain(requiredPhrases);


      // for (const required of requiredPhrases) {
      //   const regex = RegExp(required)
      //   expect(content).toContain(regex);
      // }

      // for (const forbidden of forbiddenPhrases) {
      //   const regex = RegExp(forbidden)
      //   expect(content).not.toContain(regex);
      // }
    });
  });
});
