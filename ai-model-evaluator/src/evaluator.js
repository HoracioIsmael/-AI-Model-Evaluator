const fs = require("fs");
const { calculateRelevance, calculateAccuracy } = require("./utils");

// Carga respuestas y palabras clave
const responses = require("./data/sample-responses.json");
const keywords = require("./data/keywords.json");

// Evalúa respuestas
function evaluateResponses() {
  const results = responses.map((response, index) => {
    const relevance = calculateRelevance(response.text, keywords);
    const accuracy = calculateAccuracy(response.text, keywords);
    return {
      id: index + 1,
      text: response.text,
      relevance,
      accuracy,
      overallScore: (relevance + accuracy) / 2,
    };
  });

  // Exporta resultados
  fs.writeFileSync("./results/evaluation-results.json", JSON.stringify(results, null, 2));
  console.log("Evaluation completed. Results saved to 'evaluation-results.json'.");
}

// Ejecuta la evaluación
evaluateResponses();
