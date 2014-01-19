function duckCount(args){
	console.log(args);
	var object = Object.create(null)
  object.quack = function() {
  console.log('quack')
}
	Object.getPrototypeOf(object) === Object.prototype
	object.hasOwnProperty('quack') 
}

module.exports = duckCount;
