const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const skipDirs = new Set(['node_modules', '.git', 'dist', 'build']);

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (skipDirs.has(entry.name)) continue;
      walk(full);
    } else if (/\.tsx?$/.test(entry.name)) {
      const before = fs.readFileSync(full, 'utf8');
      let next = before;
      // Remove version suffixes inside import specifiers, e.g. "@radix-ui/react-slot@1.1.2" -> "@radix-ui/react-slot".
      next = next.replace(/(["'])([@\w\-\/]+)@[0-9][^"']*(\1)/g, '$1$2$3');
      // Drop unused default React imports; keep named imports if present.
      next = next.replace(/^import React,\s*{([^}]*)}\s*from ["']react["'];\s*/gm, 'import {$1} from "react";\n');
      next = next.replace(/^import React from ["']react["'];\s*/gm, '');
      if (next !== before) {
        fs.writeFileSync(full, next, 'utf8');
      }
    }
  }
}

walk(root);
