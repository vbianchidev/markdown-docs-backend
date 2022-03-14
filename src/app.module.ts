import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { ModulesModule } from './modules/modules.module';

@Module({
  imports: [PostModule, ModulesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
