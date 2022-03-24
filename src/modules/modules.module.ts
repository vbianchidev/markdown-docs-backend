import { Module } from '@nestjs/common';
import { PageModule } from './page/page.module';

import { UserModule } from './user/user.module';

@Module({
  imports: [PageModule, UserModule],
})
export class ModulesModule {}
