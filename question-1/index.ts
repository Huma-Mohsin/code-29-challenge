// //Question 85: Finding the Position of a Substring: Write a function that locates the first occurrence of the word "code" within any given string and returns its position.

// Explain & TIP: Use .indexOf() to find where a certain piece of text starts within a larger string. If the text isn't found, this method returns -1.

//Solution
//A substring is a contiguous sequence of characters within a larger string. It represents a portion of the original string, starting from one index position and ending at another index position within the string. Substrings allow for extracting specific parts of a string for various purposes such as manipulation, analysis, or comparison.


function find_Occurence_Of_Word(sentence:string){
    let position1= sentence.indexOf("code");
    let position2=sentence.indexOf("CODE");//consider a word not found ,it returns the output as -1.
    return [position1,position2]//it returns the indexes in a list form
    
}
let sentence="Within the binary whispers of ones and zeros, code breathes life into the machinery of progress, scripting the narrative of a digital evolution."
console.log(sentence);//returns a string
console.log("\n");
console.log(find_Occurence_Of_Word(sentence));//returns a number, i.e position of the word in a sentence.
//Author-Huma Mohsin







