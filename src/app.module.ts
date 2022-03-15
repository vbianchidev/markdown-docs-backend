import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ModulesModule } from './modules/modules.module';

@Module({
  imports: [
    ModulesModule,
    MongooseModule.forRoot('mongodb://localhost:27017/markdown'),
  ],
})
export class AppModule {}
