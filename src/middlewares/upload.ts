import multer from 'multer';
import { v2 } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});

const storage = new CloudinaryStorage({
    cloudinary: v2,
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5120 * 1024 * 1024,
    },
});

export default upload;
