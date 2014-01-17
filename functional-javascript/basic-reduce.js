function reduce( arr, fn, init) {
	if (!arr.length) return [];
	var first = arr[0];
	var rest = arr.slice(1);
	return reduce(rest, fn, init);

}

module.exports = reduce;