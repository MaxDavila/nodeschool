function countWords(inputWords) {
	return inputWords.reduce(function(result, curr){
		result[curr] = ++result[curr] || 1;
		return result
	}, {});

}

module.exports = countWords;