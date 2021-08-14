// Unsplash collections for a random background image
const collections = [
  "4171108", // Life
  "1267431", // Life
  "179297", // Plant Life
  "1971015", // Simplicity
  "2569191", // Experimental
  "209138", // Happiness
  "566331", // Earth Tones
  "4303775", // School Aesthetic
  "1632080", // Double Exposures
  "789734" // Abstract
];

const styles = collections.map(
  (coll) => `url("https://source.unsplash.com/collection/${coll}")`
);
