import asyncHandler from 'express-async-handler'
import express from 'express'
import { createBasket,getBasketById } from '../controllers/basketController.js'

const router=express.Router()

router.post('/',createBasket);
router.get('/:basketId',getBasketById)
export default router