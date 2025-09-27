function solve() {
  let inputText = document.getElementById("text").value;
  const currentCase = document.getElementById("naming-convention").value;
  const errorMessage = document.getElementById("result");

  if (currentCase !== "Camel Case" && currentCase !== "Pascal Case") {
    errorMessage.textContent = `Error!`;
    return;
  } 

  inputText = inputText.toLowerCase();
  let result = '';

  if (currentCase === 'Camel Case') {
    const arrayOfWords = inputText.split(' ');
    result += arrayOfWords[0]
    for (let i = 1; i < arrayOfWords.length; i++) {
      let word = arrayOfWords[i];
      let editedWord = (word.substring(0, 1)).toUpperCase() + word.substring(1);
      result += editedWord;
    }
  } else if (currentCase === 'Pascal Case') {
    const arrayOfWords = inputText.split(' ');
    for (let i = 0; i < arrayOfWords.length; i++) {
      let word = arrayOfWords[i];
      let editedWord = (word.substring(0, 1)).toUpperCase() + word.substring(1);
      result += editedWord;
    }
  }
  
  errorMessage.textContent = result;
}