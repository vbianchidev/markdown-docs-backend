import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import slugify from 'slugify';
import { REGEX } from 'src/utils/regex.utils';

import { Post, PostSchema } from './entities/post.entity';
import { PostController } from './post.controller';
import { PostService } from './post.service';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Post.name,
        useFactory: () => {
          const schema = PostSchema;
          schema.pre<Post>('save', async function () {
            this.slug = slugify(this.title, {
              lower: true,
              remove: REGEX.SLUG_RULE,
            });
          });

          return schema;
        },
      },
    ]),
  ],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
