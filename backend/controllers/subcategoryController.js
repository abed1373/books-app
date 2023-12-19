import asyncHandler from 'express-async-handler';
import Subcategory from '../models/subcategoryModel.js';

//create subcategory
const createSubcategory = asyncHandler(async (req, res) => {
  const { name, category } = req.body;

  const subcategory = new Subcategory({
    name,
    category,
  });
  await subcategory.save();

  res.status(201).json(subcategory);
});

//Get subcategory by ID
const getSubcategoryById = asyncHandler(async (req, res) => {
  const subcategory = await Subcategory.findById(req.params.subcategoryId)
    .populate('category', 'name-_id')
    .exec();
  console.log(subcategory);

  if (!subcategory) {
    res.status(404).json({ message: 'Subcategory not found' });
    return;
  }
  res.json(subcategory);
});

export { createSubcategory, getSubcategoryById };
