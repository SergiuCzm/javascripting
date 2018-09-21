function countWords(inputWords) {
  var countedWords = inputWords.reduce(function (allWords, word) { 
    if (word in allWords) {
      allWords[word]++;
    }
    else {
      allWords[word] = 1;
    }
    return allWords;
  }, {});
  return countedWords;
}

module.exports = countWords