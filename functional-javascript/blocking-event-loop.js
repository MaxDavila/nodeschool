function repeat(operation, num) {
	if(num <= 0) return;
	// release control every 10 iterations
	// 10 is arbitrary
	operation();
	if (num % 10 === 0) {
		setTimeout(function(){
			repeat(operation, --num);
		});
	} else {
		repeat(operation, --num);
	}
}

module.exports = repeat;