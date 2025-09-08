const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'formulations.ts');
let content = fs.readFileSync(filePath, 'utf8');

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

// Helper to add missing fields
function addMissingFields(objText) {
  fields.forEach(field => {
    const regex = new RegExp(`\\b${field}\\b\\s*:`);
    if (!regex.test(objText)) {
      objText = objText.replace(/(indications\s*:\s*\[[^\]]*\],)/, `$1\n  ${field}: '',`);
    }
  });
  return objText;
}

// Move fields out of dosage
function moveFieldsOutOfDosage(objText) {
  const dosageRegex = /dosage\s*:\s*{([^}]*)}/;
  const match = objText.match(dosageRegex);
  if (match) {
    let dosageFields = match[1];
    let newFields = '';
    fields.forEach(field => {
      const fieldRegex = new RegExp(`${field}\\s*:\\s*([^,}]*)[,}]`);
      const fieldMatch = dosageFields.match(fieldRegex);
      if (fieldMatch) {
        newFields += `  ${field}: ${fieldMatch[1]},\n`;
        dosageFields = dosageFields.replace(fieldRegex, '');
      }
    });
    objText = objText.replace(dosageRegex, `dosage: {${dosageFields}}`);
    objText = objText.replace(/(indications\s*:\s*\[[^\]]*\],)/, `$1\n${newFields}`);
  }
  return objText;
}

// Find all formulation objects
const formulationRegex = /{[^{}]*?indications\s*:\s*\[[^\]]*\][^{}]*?dosage\s*:\s*{[^}]*}[^{}]*?anupana\s*:\s*\[[^\]]*\][^{}]*?contraindications\s*:\s*\[[^\]]*\][^{}]*?reference\s*:\s*'[^']*'[^{}]*?image\s*:\s*'[^']*'[^{}]*?}/gs;

const updatedContent = content.replace(formulationRegex, (match) => {
  let objText = moveFieldsOutOfDosage(match);
  objText = addMissingFields(objText);
  return objText;
});

fs.writeFileSync(filePath, updatedContent, 'utf8');
console.log('All formulation entries fixed and fields moved to top level!');
