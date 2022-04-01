import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from './entities/book.schema';
import { MulterModule } from '@nestjs/platform-express';
import { PreMiddleware } from './middlewares/pre.middleware';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
    // MongooseModule.forFeatureAsync([
    //   {
    //     name: Book.name,
    //     useFactory: () => {
    //       const schema = BookSchema;
    //       schema.pre('save', function () {
    //         console.log('Hello from pre save');
    //       });
    //       return schema;
    //     },
    //   },
    // ]),
    MulterModule.register({
      dest: './public/uploads/bookCovers',
    }),
  ],

  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
