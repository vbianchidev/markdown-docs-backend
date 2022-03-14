import { Module } from '@nestjs/common';
import { PostModule } from './post/post.module';
import { CategoryModule } from './category/category.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [PostModule, CategoryModule, UserModule]
})
export class ModulesModule {}
