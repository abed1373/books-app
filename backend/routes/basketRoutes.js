import asyncHandler from 'express-async-handler'
import express from 'express'
import { createBasket,getBasketById } from '../controllers/basketController.js'

const router=express.Router()

router.post('/',asyncHandler(createBasket));
router.get('/:basketId',asyncHandler(getBasketById))
export default router