import express from 'express';
import multer from 'multer';
import path from 'path';
import {
  getAllImage,
  uploadImage,
  getImageById,
} from '../controllers/imageController.js';

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

router.post('/upload', upload.single('image'), uploadImage);
router.get('/images', getAllImage);

router.get('/images/:imageId', getImageById);

export default router;
