import { Request, Response } from 'express';
import Image from '../models/image';
import multerMiddleware from '../middleware/multer';

const uploadImage = async (req: Request, res: Response) => {
  try {
    // Use the multer middleware here
    multerMiddleware(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ error: 'Error handling file upload' });
      }

      // Continue with your file upload logic
      if (!req.file) {
        return res.status(400).json({ error: 'No image provided' });
      }

      const uploadedFile = req.file;
      // Validate uploaded image
      const validImageTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (!validImageTypes.includes(uploadedFile.mimetype)) {
        return res.status(400).json({
          error:
            'Invalid image format. Please upload a JPEG, PNG, or GIF file.',
        });
      }

      const image = new Image({
        data: uploadedFile.buffer,
        contentType: uploadedFile.mimetype,
      });

      await image.save();

      const imageUrl = `/get_image/${image._id}`;

      res
        .status(200)
        .json({ message: 'Image uploaded successfully', imageUrl });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getImage = async (req: Request, res: Response) => {
  try {
    const image = await Image.findById(req.params.id);

    if (!image) {
      return res.status(404).json({ error: 'Image not found' });
    }

    res.setHeader('Content-Type', image.contentType);
    res.send(image.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export { uploadImage, getImage };
