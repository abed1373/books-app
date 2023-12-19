import mongoose from 'mongoose';
import connectDB from './config/dbConnect.js';
import Book from './models/bookModel.js';
import Author from './models/authorModel.js';
import Category from './models/categoryModel.js';
import Subcategory from './models/subcategoryModel.js';
import Image from './models/imageModel.js';



async function seedData() {
  // Connect to your MongoDB database

  //  mongoose.connect(
  //   'mongodb+srv://admin:admin@cluster0.mukp24o.mongodb.net/users-backend?retryWrites=true&w=majority',
  //   {
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //   }
  // );
  // Clear existing data
  await Book.deleteMany();
  await Author.deleteMany();
  await Category.deleteMany();
  await Subcategory.deleteMany();
  await Image.deleteMany();
  // Insert seed data for authors
  const author1 = await Author.create({ name: 'Author 1' });
  const author2 = await Author.create({ name: 'Author 2' });
  // Insert seed data for categories
  const category1 = await Category.create({ name: 'Fiction' });
  const category2 = await Category.create({ name: 'Non-Fiction' });
  // Insert seed data for subcategories
  const subcategory1 = await Subcategory.create({
    name: 'Mystery',
    category: {
      _id: category1._id,
      name: category1.name,
    },
  });
  const subcategory2 = await Subcategory.create({
    name: 'Science Fiction',
    category: {
      _id: category2._id,
      name: category2.name,
    },
  });
  // create Image
  const image1 = await Image.create({
    name: 'book-1.png',
    description: 'Description 1',
  });
  const image2 = await Image.create({
    name: 'book-2.png',
    description: 'Description 2',
  });

  // Insert seed data for books
  await Book.create([
    {
      title: 'Book 1',
      author: author1,
      category: category1,
      subcategory: subcategory1,
      images: image1,
      price: 10,
    },
    {
      title: 'Book 2',
      author: author2,
      category: category2,
      subcategory: subcategory2,
      images: image2,
      price: 15,
    },
  ]);
  console.log('Database seeded successfully.');
}
// seedData().then(() => {
//   connectDB().disconnect();
// });
