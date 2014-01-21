function duckCount(){
	var count = 0;
	for (var i = 0; i < arguments.length ; i++) {
		if (Object.prototype.hasOwnProperty.call(arguments[i], 'quack') === true) 
			count = count + 1;
	}
	return count;
}

module.exports = duckCount;
