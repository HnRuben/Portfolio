#!/usr/bin/env node
/**
 * One-time extraction script: converts the inline TypeScript arrays
 * in data.service.ts into src/assets/data.json.
 * Run once with: node editor/extract-data.js
 */
const fs = require('fs');
const path = require('path');
const os = require('os');

const projectRoot = path.join(__dirname, '..');
const tsPath = path.join(projectRoot, 'src/app/core/services/data.service.ts');
const outputPath = path.join(projectRoot, 'src/assets/data.json');

let src = fs.readFileSync(tsPath, 'utf8');

// Normalize line endings (Windows CRLF → LF)
src = src.replace(/\r\n/g, '\n');

// Strip TypeScript-specific syntax to produce valid JavaScript
src = src
  // Remove import statements
  .replace(/^import .+;\n/gm, '')
  // Remove @Injectable decorator line
  .replace(/@Injectable\(\{[^}]+\}\)\n/, '')
  // Remove export class declaration
  .replace(/export class DataService \{\n/, '')
  // Convert "readonly name: SomeType[] = " → "const name = "
  .replace(/  readonly (\w+):[^=]+=\s/g, 'const $1 = ')
  // Remove all method definitions + class closing brace
  .replace(/\n  getCompetenceById[\s\S]*/, '');

// Append CommonJS export
src += '\nmodule.exports = { competences, realisations, experiences };\n';

// Write to a temp file and require() it (lets Node parse template literals & SVG strings)
const tmpPath = path.join(os.tmpdir(), `portfolio-extract-${Date.now()}.js`);
fs.writeFileSync(tmpPath, src, 'utf8');

try {
  const data = require(tmpPath);
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(data, null, 2), 'utf8');
  console.log('✅  data.json written to src/assets/data.json');
} finally {
  fs.unlinkSync(tmpPath);
}
