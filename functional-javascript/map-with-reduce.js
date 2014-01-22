module.exports = function arrayMap(arr, fn) {
	return arr.reduce(function(prev, curr, indx, array){
		prev.push(fn.call(null, curr))
		return prev
	}, [])
}