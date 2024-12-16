// Calcula relevancia basada en palabras clave
function calculateRelevance(text, keywords) {
    const words = text.toLowerCase().split(" ");
    const matches = words.filter((word) => keywords.includes(word.toLowerCase()));
    return (matches.length / keywords.length) * 100;
  }
  
  // Calcula precisión basada en palabras clave esperadas
  function calculateAccuracy(text, keywords) {
    const words = text.toLowerCase().split(" ");
    const matches = words.filter((word) => keywords.includes(word.toLowerCase()));
    return matches.length > 0 ? (matches.length / words.length) * 100 : 0;
  }
  
  module.exports = { calculateRelevance, calculateAccuracy };
  