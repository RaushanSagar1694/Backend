
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";



const connectDB = async () => {
    try{
        const con = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`MONGODB connected !! DB HOST ${con.connection.host}`);
    }
    catch (error){
        console.log("MONGODB connection failed ",error);
    }
}

export default connectDB;
