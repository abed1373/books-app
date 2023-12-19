import express from 'express';
import {
  createBook,
  getBook,
  getBooks,
} from '../controllers/bookController.js';
import asyncHandler from 'express-async-handler';

const router = express.Router();

router.get('/',getBooks);
router.post('/', createBook);
router.get('/:bookId', getBook);

export default router;
