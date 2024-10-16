function analyzeSentence(sentence) {
  
    let length = 0;     
    let wordCount = 0;    
    let vowelCount = 0;  

    // List of vowels both in uppercase and lowercase
    const vowels = "aeiouAEIOU";

 
    sentence = sentence.trim();  
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];

        if (char !== ' ') {
            length++;
        }

       
        if (vowels.indexOf(char) !== -1) {
            vowelCount++;
        }

        if (char === ' ' || i === sentence.length - 1) {
            if (char !== ' ') {
                wordCount++;  // Last word after the final character
            }
            if (i !== sentence.length - 1 && sentence[i+1] !== ' ') {
                wordCount++;
            }
        }
    }

    
    if (sentence[sentence.length - 1] === '.') {
        sentence = sentence.slice(0, sentence.length - 1);
    }

    console.log("Length of the sentence (excluding the period):", length);
    console.log("Number of words:", wordCount);
    console.log("Number of vowels:", vowelCount);
}


let sentence = prompt("Enter a sentence ending with a period: ");
if (sentence[sentence.length - 1] === '.') {
    analyzeSentence(sentence);
} else {
    console.log("The sentence must end with a period.");
}

