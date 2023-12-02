import express from 'express';
import {
  createBook,
  getBook,
  getBooks,
} from '../controllers/bookController.js';
import asyncHandler from 'express-async-handler';

const router = express.Router();

router.get('/',asyncHandler(getBooks));
router.post('/', asyncHandler(createBook));
router.get('/:bookId', asyncHandler(getBook));

export default router;
