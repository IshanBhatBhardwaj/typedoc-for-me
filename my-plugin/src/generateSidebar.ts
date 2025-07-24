import { readdirSync, writeFileSync } from 'fs';
import { join } from 'path';

export const generateSidebar = () => {

    const docsPath = './docs';
    const sidebarPath = join(docsPath, '_Sidebar.md');

    // Ignore these files bru
    const IGNORE_FILES = new Set(['_Sidebar.md', 'Home.md', 'API Reference.md']);

    const files = readdirSync(docsPath)
    .filter(file => file.endsWith('.md') && !IGNORE_FILES.has(file));

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

    if (!groups[category]) {
        groups[category] = [];
    }

    groups[category].push(`  - [[${pageName}]]`);
    }

    // Sort alphabetically like a boss muhaha
    const sortedGroupNames = Object.keys(groups).sort();
    for (const group of sortedGroupNames) {
    groups[group].sort();
    }

    let sidebar = `📘 Wiki Contents\n\n- [[Home]]\n\n- [[API Reference]]\n\n`;

    for (const group of sortedGroupNames) {
    sidebar += '<details>\n'
    sidebar += '<summary>\n'
    sidebar += `${group}s\n`;
    sidebar += '</summary>\n'
    sidebar += groups[group].join('\n') + '\n';
    sidebar += '</details>\n\n'
    }

    writeFileSync(sidebarPath, sidebar);
}