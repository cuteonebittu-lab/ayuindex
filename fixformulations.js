const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'formulations.ts');
let content = fs.readFileSync(filePath, 'utf8');

// This script assumes each formulation is a top-level object in an array.
// It will add missing fields and move nested fields out of dosage if needed.

const fields = [
  'categories',
  'adultDosage',
  'paediatricDosage',
  'doseAdjustment',
  'pregnancyLactation',
  'modeOfAction',
  'adverseDrugReactions',
  'interactions',
  'contraindicationsWarnings',
  'generalConsiderations'
];

// Find all formulation objects
const formulationRegex = /{([^{}]*?indications\s*:\s*\[[^\]]*\][^{}]*?dosage\s*:\s*{[^}]*}[^{}]*?anupana\s*:\s*\[[^\]]*\][^{}]*?contraindications\s*:\s*\[[^\]]*\][^{}]*?reference\s*:\s*'[^']*'[^{}]*?image\s*:\s*'[^']*'[^{}]*?)}/gs;

const updatedContent = content.replace(formulationRegex, (match) => {
  // Move fields out of dosage if present
  let newFields = '';
  let dosageMatch = match.match(/dosage\s*:\s*{([^}]*)}/);
  if (dosageMatch) {
    let dosageFields = dosageMatch[1];
    fields.forEach(field => {
      let fieldRegex = new RegExp(`${field}\\s*:\\s*([^,}]*)[,}]`);
      let fieldMatch = dosageFields.match(fieldRegex);
      if (fieldMatch) {
        newFields += `  ${field}: ${fieldMatch[1]},\n`;
        dosageFields = dosageFields.replace(fieldRegex, '');
      }
    });
    match = match.replace(/dosage\s*:\s*{([^}]*)}/, `dosage: {${dosageFields}}`);
    match = match.replace(/(indications\s*:\s*\[[^\]]*\],)/, `$1\n${newFields}`);
  }
  // Add missing fields if not present
  fields.forEach(field => {
    if (!match.includes(`${field}:`)) {
      match = match.replace(/(indications\s*:\s*\[[^\]]*\],)/, `$1\n  ${field}: '',`);
    }
  });
  return match;
});

fs.writeFileSync(filePath, updatedContent, 'utf8');
console.log('All formulation entries updated and fields moved to top level!');
