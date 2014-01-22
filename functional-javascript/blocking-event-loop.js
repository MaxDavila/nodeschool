function repeat(operation, num) {
	if(num <= 0) return;

	setInterval(function(){
		operation();
		repeat(operation, --num);
	});
}

module.exports = repeat;