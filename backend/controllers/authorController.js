import asyncHandler from 'express-async-handler';
import Author from '../models/authorModel.js';

//create author
const createAuthor = asyncHandler(async (req, res) => {
  const { name } = req.body;
  const author = new Author({ name });
  await author.save();
  res.status(201).json(author);
});

//Get author by ID
const getAuthorById = asyncHandler(async (req, res) => {
  const author = await Author.findById(req.params.authorId);
  if (!author) {
    res.status(404).json({ message: 'Author is not found' });
    return;
  }
  res.json(author);
});

export {createAuthor,getAuthorById}