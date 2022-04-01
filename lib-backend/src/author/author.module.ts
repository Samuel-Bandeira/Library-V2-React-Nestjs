import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorController } from './author.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Author, AuthorSchema } from './entities/author.schema';
import { PreMiddleware } from 'src/book/middlewares/pre.middleware';
import { Book, BookSchema } from 'src/book/entities/book.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Author.name, schema: AuthorSchema }]),
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
  ],
  controllers: [AuthorController],
  providers: [AuthorService],
})
export class AuthorModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(PreMiddleware).forRoutes({
  //     path: 'author/:id',
  //     method: RequestMethod.DELETE,
  //   });
  // }
}
//implements NestModule
