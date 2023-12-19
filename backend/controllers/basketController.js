import asyncHandler from 'express-async-handler';
import Basket from '../models/basketModel.js';

//create basket
const createBasket = asyncHandler(async (req, res) => {
  const basket = new Basket({
    user: req.body.user,
    books: req.body.books || [],
  })
  await basket.save();
  res.status(201).json(basket);
});

//Get basket by ID
const getBasketById=asyncHandler(async(req,res)=>{
    const basket=await Basket.findById(req.params.basketId)
    .lean().populate('user','username').populate('books.book');
    if(!basket){
        res.status(404).json({message:'Basket not found'})
        return
    }
    res.json(basket)
})

export {createBasket,getBasketById}