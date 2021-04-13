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

  async findAllUsers() {
    try {
      const result = await knex
        .select(["id", "name", "email", "role"])
        .table("users");
      return result;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }

  async findUserById(id: number) {
    try {
      const result = await knex
        .select(["id", "name", "email", "role"])
        .where({ id })
        .table("users");
        return result.length > 0 ? result[0] : undefined;
    } catch (error) {
      console.error(error);
      return undefined;
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

  async updateUser(id:number, email: string, name: string, role:number){
    interface User {
      id: number
      email: string
      name: string
      role: number
    }
    const user: User = await this.findUserById(id);

    if(user){

      let editUser:User = {
        id: 0,
        email: '',
        name: '',
        role: 0
      }

      if(email) return editUser.email = email;
      if(name) return editUser.name = name;
      if(role) return editUser.role = role;

      try {
        await knex.update(editUser).where(id).table('users')
        return {status: true}
      } catch (error) {
        return {status: false, err: error}
      }
      
    } else {
      return {status: false, msg: "O usuário não existe"}
    }

  }

}

export default new User();
