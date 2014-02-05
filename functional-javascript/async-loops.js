function loadUsers(userIds, load, done) {
	var users = []
	var count = 0
	userIds.forEach(function(el, idx){
		load(el, function(user){
			users[idx] = user
			if (++count === userIds.length) return done(users);
		});
	});
}

module.exports = loadUsers