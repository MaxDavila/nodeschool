function countWords(inputWords) {
	var result = {};
	inputWords.reduce(function(prev, curr){
		if (result[curr] === undefined) {
			return result[curr] = 1;
		} else {
			return result[curr]++;
		}
	});
	return result;

}
// var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']

// var a = console.log(countWords(inputWords))
module.exports = countWords;