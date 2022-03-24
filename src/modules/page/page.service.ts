import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MongoGenericRepository } from 'src/base/mongo.generic.repository';

import { CreatePageDto } from './dto/create-page.dto';
import { Page } from './entities/page.entity';


@Injectable()
export class PageService extends MongoGenericRepository<CreatePageDto> {
  constructor(
    @InjectModel(Page.name) private _model: Model<Page>
  ) {
    super(_model);
  }

  findBySlug(slug: string): Promise<Page> {
    return this._model.findOne({ slug: slug }).exec();
  }
}
