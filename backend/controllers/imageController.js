import asyncHandler from 'express-async-handler';
import path from 'path';
import Image from '../models/imageModel.js';
import multer from 'multer';

const uploadImage = asyncHandler(async (req, res) => {
  const newImage = new Image({
    filename: req.file.filename,
    path: req.file.path,
  });
  const savedImage = await newImage.save();
  res.status(201).json({ image: savedImage });
  res.status(500);
  throw new Error({ error: error.message });
});

const getAllImage = asyncHandler(async (req, res) => {
  const images = await Image.find();
  if (images) {
    res.status(200).json(images);
  } else {
    res.status(404);
    throw new Error('image not found');
  }
});

const getImageById = asyncHandler(async (req, res) => {
  const image = await Image.findById(req.params.imageId);

  if (!image) {
    res.status(404);
    throw new Error('image not found');
  } else {
    res.status(200).json({ filename: image.filename, path: image.path });
  }
  res.status(500).json({ error: err.message });
});
export { getAllImage, uploadImage, getImageById };
