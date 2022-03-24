import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import slugify from 'slugify';
import { REGEX } from 'src/utils/regex.utils';

import { Page, PageSchema } from './entities/page.entity';
import { PageController } from './page.controller';
import { PageService } from './page.service';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Page.name,
        useFactory: () => {
          const schema = PageSchema;
          schema.pre<Page>('save', async function () {
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
  controllers: [PageController],
  providers: [PageService],
})
export class PageModule {}
