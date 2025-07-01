
import fs from 'fs';
import path from 'path';

const DOCS_DIR = path.join(__dirname, '/docs');
const FORBIDDEN_PHRASES = process.env.FORBIDDEN_PHRASES
const REQUIRED_PHRASES = process.env.REQUIRED_PHRASES




describe('Generated docs content validation', () => {


  console.log('ENV FORBIDDEN_PHRASE:', process.env.FORBIDDEN_PHRASE);
  expect(process.env.FORBIDDEN_PHRASE).toBe('urMom');

  if (FORBIDDEN_PHRASES === undefined) {
    throw new Error("Must define FORBIDDEN_PHRASES as a string seperated with a , : PHRASE1,PHRASE2,PHRASE3")
  }

  if (REQUIRED_PHRASES === undefined) {
    throw new Error("Must define REQUIRED_PHRASES as a string seperated with a , : PHRASE1,PHRASE2,PHRASE3")
  }

  const files = fs.readdirSync(DOCS_DIR);

  files.forEach((file) => {
    const filePath = path.join(DOCS_DIR, file);

    test(`"${file}" should contain required and not contain forbidden phrases`, () => {
      const content = fs.readFileSync(filePath, 'utf8');
      for (let phrase of FORBIDDEN_PHRASES) {
        const regex = RegExp(phrase)
        expect(content).not.toMatch(regex);
      }

      for (let phrase of REQUIRED_PHRASES) {
        const regex = RegExp(phrase)
        expect(content).toMatch(regex);
      }

    });
  });
});
