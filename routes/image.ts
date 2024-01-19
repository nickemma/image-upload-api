// routes/imageRoutes.ts
import { Router } from 'express';
import { uploadImage, getImage } from '../controllers/image';

const router = Router();

router.post('/upload', uploadImage);
router.get('/get_image/:id', getImage);

export default router;
