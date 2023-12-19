import express from 'express';
import asyncHandler from 'express-async-handler';
import { createAuthor, getAuthorById } from '../controllers/authorController.js';

const router = express.Router();

router.post('/', createAuthor);
router.get('/:authorId', getAuthorById);

export default router;
