// models/Image.ts
import mongoose, { Document, Schema } from 'mongoose';

interface Image extends Document {
  data: Buffer;
  contentType: string;
}

const imageSchema = new Schema({
  data: Buffer,
  contentType: String,
});

const ImageModel = mongoose.model<Image>('Image', imageSchema);

export default ImageModel;
