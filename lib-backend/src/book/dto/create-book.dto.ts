import { Types } from 'mongoose';
export class CreateBookDto {
  title: string;
  description: string;
  publishDate: Date;
  pageCount: number;
  createdAt: Date;
  coverImageName: string;
  author: string;
}

// @Prop({ required: true })
//   title: string;

//   @Prop()
//   description: string;

//   @Prop({ required: true, default: Date.now() })
//   publishDate: Date;

//   @Prop({ required: true })
//   pageCount: number;

//   @Prop({ required: true, default: Date.now() })
//   createdAt: Date;

//   @Prop({ required: true })
//   coverImageName: string;

//   @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Author' })
//   author: Author;
