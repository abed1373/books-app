import mongoose from 'mongoose';

const basketShema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  books: [
    {
      book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
        required: true,
      },
    },
  ],
  qty: {
    type: Number,
    required: true,
    default: 1,
  },
});

const Basket = mongoose.model('Basket', basketShema);

export default Basket;
