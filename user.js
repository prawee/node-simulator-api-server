module.exports = function() {
	var data = { users: [] }
	for (var i = 1; i <=50; i++) {
		data.users.push({ id: i, name: 'user' + 1 })
	}
	return data
}
