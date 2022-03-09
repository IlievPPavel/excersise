import {promises } from "fs";
import { User } from "../types/User";

export class userModel{
    async getUsers(): Promise<User[]>{
        const users = await promises.readFile(__dirname + "/db.json", "utf-8")
//        const formattedUsers = JSON.parse(users);
        return JSON.parse(users);
       // console.log({formattedUsers})
    }
}
(async () => {
    await new userModel().getUsers();
})()