import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/database.js';
import app from './app.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';



// add path on env
dotenv.config({
    path: './env'
})

// cors config
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))

// middleware
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());



// Route
import userRoute from './routes/user.routes.js';


// route declarations
app.use("/api/v2/users", userRoute);



//MONGODB CONNECTIONS
connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`⚙️ app is listing at port ${process.env.PORT}`);
        })
    })
    .catch((error) => {
        console.log(`❌ DB connection failed ${error}`);
    })
