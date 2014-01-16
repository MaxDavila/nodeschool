module.exports = function getShortMessage(messages){
	return messages.filter(lessThanFifty).map(getOnlyMessage);
}

function lessThanFifty(el){
	return el.message.length < 50; 
}

function getOnlyMessage(el) {
	return el.message;
}