const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'formulations.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Regex to find each formulation object
const formulationRegex = /{([^{}]*?indications\s*:\s*\[[^\]]*\][^{}]*?dosage\s*:\s*{[^}]*}[^{}]*?anupana\s*:\s*\[[^\]]*\][^{}]*?contraindications\s*:\s*\[[^\]]*\][^{}]*?reference\s*:\s*'[^']*'[^{}]*?image\s*:\s*'[^']*'[^{}]*?)}/gs;

const template = `
  categories: [],
  adultDosage: '',
  paediatricDosage: '',
  doseAdjustment: {
    hepatic: '',
    renal: '',
    diabetes: '',
    hypertension: ''
  },
  pregnancyLactation: '',
  modeOfAction: '',
  adverseDrugReactions: '',
  interactions: '',
  contraindicationsWarnings: '',
  generalConsiderations: '',
`;

const updatedContent = content.replace(formulationRegex, (match) => {
  // Insert template after indications array
  return match.replace(/(indications\s*:\s*\[[^\]]*\],)/, `$1${template}`);
});

fs.writeFileSync(filePath, updatedContent, 'utf8');
console.log('All formulation entries updated with the new pattern!');