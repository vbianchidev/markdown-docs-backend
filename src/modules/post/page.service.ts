import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreatePageDto } from './dto/create-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';
import { Page } from './entities/page.entity';

@Injectable()
export class PageService {
  constructor(@InjectModel(Page.name) private postModel: Model<Page>) {}

  async create(postDTO: CreatePageDto): Promise<Page> {
    const post = new this.postModel(postDTO);
    return await post.save();
  }

  async findAll(): Promise<Page[]> {
    return await this.postModel.find().exec();
  }

  async findOne(id: string): Promise<Page> {
    return await this.postModel.findById(id);
  }

  async findBySlug(slug: string): Promise<Page> {
    return await this.postModel.findOne({ slug: slug }).exec();
  }

  async update(id: string, updatePostDto: UpdatePageDto): Promise<Page> {
    return await this.postModel.findByIdAndUpdate(id, updatePostDto).exec();
  }

  async remove(id: string) {
    const deletedPost = this.postModel.findOneAndDelete({ _id: id }).exec();
    return (await deletedPost).remove();
  }
}
