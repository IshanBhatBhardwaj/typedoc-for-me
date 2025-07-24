import { readdirSync, writeFileSync } from 'fs';
import { join } from 'path';

export const generateSidebar = () => {

    const docsPath = './docs';
    const sidebarPath = join(docsPath, '_Sidebar.md');

    const ignoreFiles = new Set(['_Sidebar.md', 'Home.md', 'API Reference.md']);

    const getPluralWord = (word: string) => {
        const suffixesForEs = new Set(['s', 'x', 'z', 'ch', 'sh']);

        if (suffixesForEs.has(word[word.length - 1])) {
            word += 'es';
        } else {
            word += 's';
        }

        return word;
    }

    const files = readdirSync(docsPath)
    .filter(file => file.endsWith('.md') && !ignoreFiles.has(file));

    const groups: Record<string, string[]> = {};

    for (const file of files) {

        /***
         * If the file name is Function.Add.Nums.md, then .split('.') would return ['Function', 'Add', 'Nums']
         * 
         * Therefore, we must use the spread operator to capture 'Add' and 'Nums' and use .join('.')
         * so the final result can look like 'Add.Nums'
         */
        const [category, ...rest] = file.replace(/\.md$/, '').split('.');
        const pageName = [category, ...rest].join('.'); 

        const pluaralcategory = getPluralWord(category)

        if (!groups[pluaralcategory]) {
            groups[pluaralcategory] = [];
        }

        groups[pluaralcategory].push(`  - [[${pageName}]]`);
    }

    // Sort alphabetically like a boss muhaha
    const sortedGroupNames = Object.keys(groups).sort();
    for (const group of sortedGroupNames) {
        groups[group].sort();
    }

    let sidebar = `Wiki Contents\n\n[[Home]]\n\n[[API Reference]]\n\n`;

    for (const group of sortedGroupNames) {
        sidebar += '<details>\n'
        sidebar += '<summary>\n'
        sidebar += `${group}\n`;
        sidebar += '</summary>\n'
        sidebar += groups[group].join('\n\n');
        sidebar += '</details>\n\n'
    }

    writeFileSync(sidebarPath, sidebar);
}