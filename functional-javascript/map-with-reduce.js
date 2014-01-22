module.exports = function arrayMap(arr, fn) {
	return arr.reduce(function(prev, curr, indx, array){
		return prev.concat(fn(curr));
	}, [])
}