import { Module } from '@nestjs/common';

import { PostModule } from './post/page.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [PostModule, UserModule],
})
export class ModulesModule {}
