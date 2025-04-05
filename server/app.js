import express, { json, urlencoded } from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import cors from "cors"
import connection from './databse/db.js'

dotenv.config();

const app = express()

// middlewares 
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))

// to parse user data
app.use(cookieParser())
app.use(json())
app.use(urlencoded({extended: true}))

connection()

export default app