
import fs from 'fs';
import path from 'path';

const DOCS_DIR = path.join(__dirname, '/docs');




describe('Generated docs content validation', () => {




  if (process.env.FORBIDDEN_PHRASE === undefined) {
    throw new Error("Must define FORBIDDEN_PHRASES as a string seperated with a , : PHRASE1,PHRASE2,PHRASE3")
  }

  if (process.env.REQUIRED_PHRASES === undefined) {
    throw new Error("Must define REQUIRED_PHRASES as a string seperated with a , : PHRASE1,PHRASE2,PHRASE3")
  }

  const files = fs.readdirSync(DOCS_DIR);

  files.forEach((file) => {
    const filePath = path.join(DOCS_DIR, file);

    test(`"${file}" should contain required and not contain forbidden phrases`, () => {
      const content = fs.readFileSync(filePath, 'utf8');

      const FORBIDDEN_PHRASE = process.env.FORBIDDEN_PHRASE;
      console.log("Hmmm " , FORBIDDEN_PHRASE)

    });
  });
});
