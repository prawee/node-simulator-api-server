var faker = require('faker');

module.exports = function() {
	var data = { users: [] }

	for ( var i = 1; i<= 50; i++) {
		data.users.push({ id: i, name: faker.name.findName() })
	}
	return data
}
