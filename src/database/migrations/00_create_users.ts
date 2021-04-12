import {Knex} from "knex";

export async function up(knex:Knex) {
	
	return knex.schema.createTable("users", (table) => {
		table.increments("id").primary();
		table.string("name");
		table.string("email").notNullable().unique();	
        table.string("password").notNullable();
        table.integer("role")
	});
}

export async function down(knex:Knex) {
	
	knex.schema.dropTable("users");
}
