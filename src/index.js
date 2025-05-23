import { configDotenv } from "dotenv";

configDotenv({
    // Loads from .env by default so, no need to write the path
    path: './.env'
})

import connectDB from "./db/db.js";
import { app } from "./app.js";


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port : ${process.env.PORT}`);
        
    })
})
.catch((err) => {
    console.log("MongoDB connection failed !! ", err);
    
})
