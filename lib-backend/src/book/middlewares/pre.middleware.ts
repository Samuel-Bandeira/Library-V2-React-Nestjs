import { NestMiddleware, Injectable } from '@nestjs/common';
import { Request, Response } from 'express';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Author, AuthorDocument } from 'src/author/entities/author.schema';

@Injectable()
export class PreMiddleware implements NestMiddleware {
  // constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {}
  constructor(
    @InjectModel(Author.name) private authorModel: Model<AuthorDocument>,
  ) {}
  use(req: Request, res: Response, next: Function) {
    // console.log('req params:');
    // console.log(req.params.id);
    // // const book = this.bookModel.findById()
    // // this.bookModel.find(req.params.id)
    // console.log('pre middleware activated');
    // next();
  }
}
