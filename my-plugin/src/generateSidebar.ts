// generateSidebar.ts
import { readdirSync, writeFileSync } from 'fs';
import { join } from 'path';

export const generateSidebar = () => {
    const docsPath = join(process.cwd(), '/docs')
const sidebarPath = join(docsPath, '_Sidebar.md');

const allFiles = readdirSync(docsPath)
  .filter(file => file.endsWith('.md') && file !== 'Home.md' && file != 'API Reference.md');

const home = `- [[Home]]\n`;
const apiReference = `- [[API Reference]]\n`;
const classes: string[] = [];
const functions: string[] = [];
const others: string[] = [];

allFiles.forEach(file => {
  const name = file.replace(/\.md$/, '');
  if (name.toLowerCase().includes('class')) {
    classes.push(`  - [[${name}]]`);
  } else if (name.toLowerCase().includes('function')) {
    functions.push(`  - [[${name}]]`);
  } else {
    others.push(`- [[${name}]]`);
  }
});

const sidebarContent = `### 📘 Wiki Contents

${home}
### 🧱 Classes
${classes.join('\n') || '  - (None)'}

### ⚙️ Functions
${functions.join('\n') || '  - (None)'}

### 📄 Other Pages
${others.join('\n') || '  - (None)'}
`;

writeFileSync(sidebarPath, sidebarContent);
console.log(`✅ _Sidebar.md generated with ${allFiles.length} pages.`);
}
