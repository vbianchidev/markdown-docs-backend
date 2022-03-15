import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}

  async create(postDTO: CreatePostDto): Promise<Post> {
    const post = new this.postModel(postDTO);
    return await post.save();
  }

  async findAll(): Promise<Post[]> {
    return await this.postModel.find().exec();
  }

  async findOne(id: string): Promise<Post> {
    return await this.postModel.findById(id);
  }

  async findBySlug(slug: string): Promise<Post> {
    return await this.postModel.findOne({ slug: slug }).exec();
  }

  async update(id: string, updatePostDto: UpdatePostDto): Promise<Post> {
    return await this.postModel.findByIdAndUpdate(id, updatePostDto).exec();
  }

  async remove(id: string) {
    const deletedPost = this.postModel.findOneAndDelete({ _id: id }).exec();
    return (await deletedPost).remove();
  }
}
