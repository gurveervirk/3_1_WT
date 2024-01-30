const inputString = "This is the test. Some other text, too.";

// Define a regular expression to match words starting with 't' and ending with vowels
const regex = /\b[tT][a-zA-Z]*[aeiouAEIOU]\b/g;

const matches = inputString.match(regex);

if (matches) {
  console.log("Words that start with 't' and end with vowels:");
  matches.forEach(match => {
    console.log(match);
  });
} else {
  console.log("No matches found.");
}
