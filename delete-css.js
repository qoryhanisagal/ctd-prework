// delete-css.js — Clean up all style.css files inside CodeToDream
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Set up __dirname (needed in ES Modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 🔁 Start inside your CodeToDream directory
const rootDir = path.join(__dirname, '..', 'CodeToDream');

function deleteStyleCssFiles(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      deleteStyleCssFiles(fullPath); // Recursive dive into folders
    } else if (file === 'style.css') {
      console.log(`🗑️ Deleting: ${fullPath}`);
      fs.unlinkSync(fullPath);
    }
  });
}

deleteStyleCssFiles(rootDir);
console.log('✅ All style.css files removed from CodeToDream!');