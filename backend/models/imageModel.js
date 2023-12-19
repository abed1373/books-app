import mongoose from 'mongoose';
import path from 'path';

const imageSchema = new mongoose.Schema(
  {
    filename: String,
    path: String,
  },
  {
    timestamps: true,
  }
);

const Image = mongoose.model('Image', imageSchema);
export default Image;
