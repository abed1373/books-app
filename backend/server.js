import express from 'express';
import dotenv from 'dotenv';

import userRoutes from './routes/userRoutes.js';
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

app.listen(port, () => console.log(`Server started on port ${port}`));

app.use(errorHandler);
