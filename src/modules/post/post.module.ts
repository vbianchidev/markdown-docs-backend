import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, PostSchema } from './entities/post.entity';
import slugify from 'slugify';
import { REGEX } from 'src/utils/regex.utils';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Post.name,
        useFactory: () => {
          const schema = PostSchema;

          schema.pre<Post>('save', async function () {
            const post = this;
            post.slug = slugify(post.title, {lower: true, remove: REGEX.SLUG_RULE});
          });

          return schema;
        }
      }
    ])
  ],
  controllers: [PostController],
  providers: [PostService]
})
export class PostModule {}
