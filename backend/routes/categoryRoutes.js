import express from 'express'
import asyncHandler from 'express-async-handler';
import { getCategory,createCategory } from '../controllers/categoryController.js'

const router=express.Router()

router.post('/',createCategory);
router.get('/:categoryId',getCategory)

export default router