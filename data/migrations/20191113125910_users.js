exports.up = function(knex) {
	return knex.schema.createTable('users', tb => {
		tb.increments();

		tb.string('username', 128)
			.notNullable()
			.unique();
		tb.string('password', 128).notNullable();
		tb.string('department', 255);
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('users');
};
