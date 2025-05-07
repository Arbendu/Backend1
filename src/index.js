import { configDotenv } from "dotenv";
import connectDB from "./db/db.js";

configDotenv({
    // Loads from .env by default so, no need to write the path
    path: './.env'
})
connectDB();