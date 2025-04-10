import { v2 as  cloudinary } from 'cloudinary';
import fs from 'fs';



// Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET,
});


// upload files
const uploadOnCoudinary = async ( localFilePath ) => {
    try{
        if(!localFilePath) return null;

        //upload file on clodinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type : "auto",
        })

        //file has been uploaded successfully
        console.log(`File uploaded successfully at ${response.url}`);
        return response;
    }
    catch(error) {
        fs.unlinkSync(localFilePath) // remove the local save temp file as the upload operation failed
        return null;
    }
}


export {uploadOnCoudinary};