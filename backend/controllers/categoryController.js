import asyncHandler from 'express-async-handler';
import Category from '../models/categoryModel.js';

//@desc Create a category
//route POST /api/category
//@access public

const createCategory = asyncHandler(async (req, res) => {
  const { name } = req.body;
  const category = new Category({
    name
  });
  
  await category.save();
  res.status(201).json(category);
});

//@desc get a categorybyId
//route GET /api/category/categoryId
//@access public

const getCategory = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.categoryId);

  if (!category) {
    res.status(404).json({ message: 'Category not found' });
    return;
  }
  res.json(category);
});

export { getCategory, createCategory };
