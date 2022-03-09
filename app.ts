import express = require("express")
import {Application, Request, Response} from "express";
import {User} from "./types/User";
import {LoginRequest} from "./types/LoginRequest";
import {userRoutes} from "./routes/userRoutes";

const app: Application = express();

app.use("/", userRoutes);


app.listen(8081, () => {
    console.log("Connected")
})