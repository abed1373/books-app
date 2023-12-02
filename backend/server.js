import express from 'express';
import dotenv from 'dotenv';

import userRoutes from './routes/userRoutes.js';
import bookRoutes from './routes/bookRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import subcategoryRoutes from './routes/subcategoryRoutes.js';
import basketRoutes from './routes/basketRoutes.js';
import authorRoutes from './routes/authorRoutes.js';
import errorHandler from './middleware/errorHandler.js';
import cookieParser from 'cookie-parser';

import connectDB from './config/dbConnect.js';

dotenv.config();

connectDB();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/users', userRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/subcategory', subcategoryRoutes);
app.use('/api/basket', basketRoutes);
app.use('/api/author', authorRoutes);

app.listen(port, () => console.log(`Server started on port ${port}`));

app.use(errorHandler);
