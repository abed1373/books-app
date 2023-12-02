import Book from '../models/bookModel.js';
import asyncHandler from 'express-async-handler';

//@desc Get All books
//route GET /api/books
//@access public

const getBooks = asyncHandler(async (req, res) => {
  const books = await Book.find();
  res.status(200).json(books);
});

//@desc Create a book
//route POST /api/books
//@access public

const createBook = asyncHandler(async (req, res) => {
  const { title, author, category, subcategory, price } = req.body;
  const book = new Book({
    title,
    author,
    category,
    subcategory,
    price,
  });
  await book.save();
  res.status(201).json(book);
});

//@desc Get a book
//route GET /api/book/:id
//@access public

const getBook = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.bookId)
    .populate('author', 'name')
    .populate('category')
    .populate('subcategory');

    if(!book){
      res.status(404).json({message:'Book not found'});
      return
    }
  res.json(book);
});

export { getBooks, createBook, getBook };
