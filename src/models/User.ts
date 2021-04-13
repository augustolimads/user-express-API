import knex from "../database/connection";
import bcrypt from "bcrypt";

class User {
  async new(email: string, password: string, name: string) {
    try {
      const hash = await bcrypt.hash(password, 10);

      await knex("users").insert({ email, password: hash, name, role: 0 });
    } catch (error) {
      console.error(error);
    }
  }

  async findAllUsers() {
    try {
      const result = await knex("users").select([
        "id",
        "name",
        "email",
        "role",
      ]);
      return result;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  async findUserById(id: number) {
    try {
      const result = await knex("users")
        .select(["id", "name", "email", "role"])
        .where({ id });
      return result.length > 0 ? result[0] : false;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  async findUserByEmail(email: string) {
    try {
      const result = await knex("users").select("*").where({ email });

      return result.length > 0 ? true : false;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  async updateUser(id: number, email: string, name: string, role: number) {
    const user = await this.findUserById(id);

    if (user) {
      try {
        await knex("users")
          .where({ id: user.id })
          .update({ email, name, role });
        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    } else {
      return false;
    }
  }

  async deleteUser(id: number){
    
  }
}

export default new User();
