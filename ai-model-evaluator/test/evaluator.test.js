const { calculateRelevance, calculateAccuracy } = require("../src/utils");

test("calculateRelevance should return correct relevance score", () => {
  const text = "The capital of France is Paris.";
  const keywords = ["france", "paris", "capital"];
  const relevance = calculateRelevance(text, keywords);
  expect(relevance).toBeCloseTo(100);
});

test("calculateAccuracy should return correct accuracy score", () => {
  const text = "The largest planet is Jupiter.";
  const keywords = ["largest", "planet", "jupiter"];
  const accuracy = calculateAccuracy(text, keywords);
  expect(accuracy).toBeCloseTo(100);
});
