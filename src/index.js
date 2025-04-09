import expreess from 'express';
import dotenv from 'dotenv';
import connectDB from './db/database.js';
import app from './app.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))

// middleware
app.use(expreess.json({ limit: "16kb" }));
app.use(expreess.urlencoded({ extended: true, limit: "16kb" }));
app.use(expreess.static("public"));
app.use(cookieParser());


// add path on env
dotenv.config({
    path: './env'
})




//MONGODB CONNECTIONS
connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`app is listing at port ${process.env.PORT}`);
        })
    })
    .catch((error) => {
        console.log(`DB connection failed ${error}`);
    })
