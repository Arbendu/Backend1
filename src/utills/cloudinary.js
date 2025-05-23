import { v2 as cloudinary } from "cloudinary"
import fs from "fs"
import dotenv from "dotenv";

// ✅ Load environment variables here as well
dotenv.config();

// // ✅ Check if environment variables are loaded correctly
// console.log("Cloudinary ENV check:", {
//   CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
//   API_KEY: process.env.CLOUDINARY_API_KEY,
//   API_SECRET: process.env.CLOUDINARY_API_SECRET ? "Exists ✅" : "Missing ❌"
// });

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
});

const uploadOnCloudinary = async (localFilePath) => { // localFilePath is a path for a random file which was present in my system
    try {
        if (!localFilePath) {
            console.log("❌ localFilePath is missing");
            return null;
        }
        // Upload the file on cloudinary

        console.log("📤 Uploading:", localFilePath);
        const response = await cloudinary.uploader.upload(localFilePath,
            {
                resource_type: "auto"
            }
        )
        // File has been uploaded successfully
        console.log("file is uploaded on cloudinary", response.url);
        return response;
        
    } catch (error) {
        console.error("Cloudinary upload error:", error)
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        return null
    }
}

export { uploadOnCloudinary }