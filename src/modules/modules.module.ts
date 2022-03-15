import { Module } from '@nestjs/common';

import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';
import { MenuModule } from './menu/menu.module';

@Module({
  imports: [PostModule, UserModule, MenuModule],
})
export class ModulesModule {}
