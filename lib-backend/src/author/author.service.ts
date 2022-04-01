import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { Author, AuthorDocument } from './entities/author.schema';
import { Model } from 'mongoose';
import { UpdateBookDto } from 'src/book/dto/update-book.dto';
import { Book, BookDocument } from 'src/book/entities/book.schema';

@Injectable()
export class AuthorService {
  constructor(
    @InjectModel(Author.name) private authorModel: Model<AuthorDocument>,
    @InjectModel(Book.name) private bookModel: Model<BookDocument>,
  ) {}

  create(createAuthorDto: CreateAuthorDto): Promise<Author> {
    const newAuthor = new this.authorModel(createAuthorDto);
    const savedAuthor = newAuthor.save();
    return savedAuthor;
  }

  findAll(query) {
    const name = query.name;
    let searchOptions;

    if (name) {
      searchOptions = { name: new RegExp(name, 'i') };
    } else {
      searchOptions = {};
    }

    return this.authorModel.find(searchOptions).exec();
  }

  findOne(id: string) {
    return this.authorModel.findById(id);
  }

  async update(id: string, updateAuthorDto: UpdateAuthorDto) {
    const author = await this.authorModel.findById(id);

    Object.keys(updateAuthorDto).forEach((key) => {
      author[key] = updateAuthorDto[key];
    });

    const res = author.save();
    return res;
  }

  async remove(id: string) {
    const booksFromAuthor = await this.bookModel.findOne({ author: id });

    if (!booksFromAuthor) {
      return this.authorModel.deleteOne({ _id: id });
    } else {
      throw new Error('User has books still');
    }
  }
}
