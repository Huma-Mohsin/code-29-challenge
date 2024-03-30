// //Question 86: Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string. It should return true if found, otherwise false.
// Explain & TIP: The .includes() method lets you check if a string contains a certain piece of text, returning a boolean (true or false).
var sentence = "JavaScript is a versatile programming language commonly used for creating interactive websites and web applications.";
function presence_of_word(sentence) {
    var find1 = sentence.includes("JavaScript");
    var find2 = sentence.includes("Typescript");
    return [find1, find2];
}
console.log(presence_of_word(sentence));
//Author-HUMA MOHSIN
