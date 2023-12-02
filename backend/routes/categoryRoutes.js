import express from 'express'
import asyncHandler from 'express-async-handler';
import { getCategory,createCategory } from '../controllers/categoryController.js'

const router=express.Router()

router.post('/',asyncHandler(createCategory));
router.get('/:categoryId',asyncHandler(getCategory))

export default router