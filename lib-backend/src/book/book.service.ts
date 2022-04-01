import {
  ConsoleLogger,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book, BookDocument } from './entities/book.schema';
import { Model } from 'mongoose';
import * as fs from 'fs';
import * as path from 'path';
@Injectable()
export class BookService {
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {}

  async create(fileName: string, createBookDto: CreateBookDto) {
    createBookDto.coverImageName = fileName;
    const newBook = new this.bookModel(createBookDto);
    try {
      const res = await newBook.save();
      return res;
    } catch (err) {
      if (fileName) {
        fs.unlink(path.join('./public/uploads/bookCovers', fileName), (err) => {
          if (err) {
            console.error(err);
          }
        });
      }
      throw new HttpException(
        `${err.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll(query) {
    const title = query.title;
    // if (title === '') {
    //   throw new HttpException(
    //     `no query, no book`,
    //     HttpStatus.INTERNAL_SERVER_ERROR,
    //   );
    // }

    let searchOptions;

    if (title) {
      searchOptions = { title: new RegExp(title, 'i') };
    } else {
      searchOptions = {};
    }

    const books = await this.bookModel.find(searchOptions).exec();
    if (books) {
      return books;
    } else {
      return 'didnt found anything';
    }
  }

  async findOne(id: string) {
    try {
      const book = await this.bookModel.findById(id);
      return book;
    } catch {
      throw new HttpException(
        'didnt find book',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  findNewest() {
    try {
      const book = this.bookModel.find().sort({ createdAt: 'desc' }).limit(10);
      return book;
    } catch {
      throw new HttpException(
        `coundn't find newest books`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(id: string, fileName: string, updateBookDto: UpdateBookDto) {
    const book = await this.bookModel.findById(id);

    if (fileName) {
      fs.unlink(
        path.join('./public/uploads/bookCovers', book.coverImageName),
        (err) => {
          if (err) {
            console.error(err);
          }
        },
      );
      updateBookDto.coverImageName = fileName;

      Object.keys(updateBookDto).forEach((key) => {
        if (key !== 'cover' && key !== 'createdAt') {
          book[key] = updateBookDto[key];
        }
      });
    } else if (!fileName) {
      Object.keys(updateBookDto).forEach((key) => {
        if (
          key !== 'coverImageName' &&
          key !== 'cover' &&
          key !== 'createdAt'
        ) {
          book[key] = updateBookDto[key];
        }
      });
    }

    console.log('book after update:');
    console.log(book);
    const res = await book.save();
    return res;
  }

  async remove(id: string) {
    const deleted = await this.bookModel.findById(id);
    console.log('to be deleted:');
    console.log(deleted);
    await this.bookModel.deleteOne({ _id: id });

    fs.unlink(
      path.join('./public/uploads/bookCovers', deleted.coverImageName),
      (err) => {
        if (err) {
          console.error(err);
        }
      },
    );
    return deleted;
  }
}
