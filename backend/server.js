import express from 'express';
import dotenv from 'dotenv';

import userRoutes from './routes/userRoutes.js';
import bookRoutes from './routes/bookRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import subcategoryRoutes from './routes/subcategoryRoutes.js';
import basketRoutes from './routes/basketRoutes.js';
import authorRoutes from './routes/authorRoutes.js';
import imageRoutes from './routes/imageRoutes.js';

import errorHandler from './middleware/errorHandler.js';
import cookieParser from 'cookie-parser';
import multer from 'multer';
import cors from 'cors';
import path from 'path';
import Image from './models/imageModel.js';

import connectDB from './config/dbConnect.js';
import { uploadImage } from './controllers/imageController.js';

dotenv.config();

connectDB();

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });
app.use('/uploads', express.static('uploads'));

app.use('/api/users', userRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/subcategory', subcategoryRoutes);
app.use('/api/basket', basketRoutes);
app.use('/api/author', authorRoutes);
app.use('/api', imageRoutes);



app.listen(port, () => console.log(`Server started on port ${port}`));

app.use(errorHandler);
