import {Router} from "express";
import {User} from "../types/User";
import {LoginRequest} from "../types/LoginRequest";
import {getUsers, login} from "../Controllers/userControllers";
export const userRoutes = Router();


userRoutes.get("/user",getUsers);
userRoutes.get("/login",login);