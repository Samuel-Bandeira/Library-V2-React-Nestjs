import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsEmail, IsNotEmpty } from 'class-validator';
import * as mongoose from 'mongoose';
import { Author } from 'src/author/entities/author.schema';
import * as path from 'path';
export type BookDocument = Book & Document;

@Schema({
  toJSON: {
    virtuals: true,
  },
})
export class Book {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop({ required: true, default: Date.now() })
  publishDate: Date;

  @Prop({ required: true })
  pageCount: number;

  @Prop({ required: true, default: Date.now() })
  createdAt: Date;

  @Prop({ required: true })
  coverImageName: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
    required: 'true',
  })
  author: Author;
}

export const BookSchema = SchemaFactory.createForClass(Book);

BookSchema.virtual('coverImagePath').get(function (this: BookDocument) {
  if (this.coverImageName) {
    return path.join('/', 'uploads/bookCovers', this.coverImageName);
  }
});

BookSchema.pre('remove', function (next) {

});
