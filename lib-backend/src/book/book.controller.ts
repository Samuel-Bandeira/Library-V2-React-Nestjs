import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  UploadedFiles,
  HttpStatus,
  HttpException,
  Query,
  Put,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

// const verifyIfFile = () => {}

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  @UseInterceptors(FilesInterceptor('cover'))
  async create(
    @Body() createBookDto: CreateBookDto,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    console.log('FILES:');
    // console.log(files);
    const fileName = files[0]?.filename ? files[0]?.filename : null;
    if (!fileName) {
      throw new HttpException(
        'Book validation failed: `file` is required.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    const res = await this.bookService.create(fileName, createBookDto);
    return res;
  }

  @Get()
  findAll(@Query() query) {
    return this.bookService.findAll(query);
  }

  @Get('/newest')
  async findNewest() {
    return await this.bookService.findNewest();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookService.findOne(id);
  }

  @Put(':id')
  @UseInterceptors(FilesInterceptor('cover'))
  update(
    @Param('id') id: string,
    @Body() updateBookDto: UpdateBookDto,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    const fileName = files[0]?.filename ? files[0]?.filename : null;
    // console.log(updateBookDto);
    return this.bookService.update(id, fileName, updateBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookService.remove(id);
  }
}
