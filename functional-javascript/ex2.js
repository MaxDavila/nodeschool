function repeat(operation, num) {
	if (num <= 0) return;
	operation.call(undefined);
	repeat(operation, num - 1);
}

module.exports = repeat;