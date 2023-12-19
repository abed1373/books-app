import mongoose from 'mongoose';

const subcategorySchema = new mongoose.Schema(
  {
    name: String,
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
    },
  },
  {
    timestamps: true,
  }
);

const Subcategory = mongoose.model('Subcategory', subcategorySchema);

export default Subcategory;
