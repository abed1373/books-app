import express from 'express';
import asyncHandler from 'express-async-handler';
import {
  createSubcategory,
  getSubcategoryById,
} from '../controllers/subcategoryController.js';

const router = express.Router();

router.post('/', createSubcategory);
router.get('/:subcategoryId', getSubcategoryById);

export default router;
