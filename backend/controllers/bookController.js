import Book from '../models/bookModel.js';
import Author from '../models/authorModel.js';
import Subcategory from '../models/subcategoryModel.js';
import asyncHandler from 'express-async-handler';
import Category from '../models/categoryModel.js';
import Image from '../models/imageModel.js';

//@desc Create a book
//route POST /api/books
//@access public

const createBook = asyncHandler(async (req, res) => {
  const { title, price, categoryId, subcategoryId, authorId, imageId } =
    req.body;

  const category = await Category.findById(categoryId);
  const subcategory = await Subcategory.findById(subcategoryId);
  const author = await Author.findById(authorId);
  const image = await Image.findById(imageId);
  if (!category || !subcategory || !author || !image) {
    return res
      .status(404)
      .json({ error: 'Category, subcategory, or author not found' });
  }

  const book = new Book({
    title,
    price,
    category: categoryId,
    subcategory: subcategoryId,
    author: authorId,
    image: imageId,
  });

  await book.save();

  res.status(201).json(book);
});

//@desc Get All books
//route GET /api/books
//@access public

const getBooks = asyncHandler(async (req, res) => {
  const books = await Book.find().populate('category subcategory author image');

  if (!books) {
    res.status(404).json({ message: 'Book not found' });
    return;
  }
  res.json(books);
  console.log(books);
});

//@desc Get a book
//route GET /api/book/:id
//@access public

const getBook = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.bookId)
    .populate('subcategory', 'name-_id')
    .populate('author', 'name-_id')
    .populate('category', 'name-_id')
    .populate('image', 'filename-_id')
    .exec();

  if (!book) {
    res.status(404).json({ message: 'Book not found' });
    return;
  }
  res.json({
    _id: book._id,
    title: book.title,
    author: book.author ? book.author.name : null,
    category: book.category ? book.category.name : null,
    subcategory: book.subcategory ? book.subcategory.name : null,
    image: book.image ? book.image.name : null,
    price: book.price ? book.price : null,
  });
  console.log(book);
});

export { getBooks, createBook, getBook };
