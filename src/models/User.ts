import knex from "../database/connection";
import bcrypt from "bcrypt";

class User {
  async new(email: string, password: string, name: string) {
    try {
      const hash = await bcrypt.hash(password, 10);

      await knex
        .insert({ email, password: hash, name, role: 0 })
        .table("users");
    } catch (error) {
      console.error(error);
    }
  }

  async findUserByEmail(email: string) {
    try {
      const result = await knex.select("*").from("users").where({ email });

      return result.length > 0 ? true : false;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}

export default new User();
