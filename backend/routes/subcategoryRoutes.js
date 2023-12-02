import express from 'express'
import asyncHandler from 'express-async-handler'
import { createSubcategory,getSubcategoryById } from '../controllers/subcategoryController.js'

const router=express.Router()

router.post('/',asyncHandler(createSubcategory));
router.get('/:subcategoryId',asyncHandler(getSubcategoryById))

export default router;
