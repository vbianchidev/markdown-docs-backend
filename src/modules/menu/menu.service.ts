import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';

import { Menu } from './entities/menu.entity';

@Injectable()
export class MenuService { 

  constructor(
    @InjectModel(Menu.name) private menuModel: Model<Menu>
  ) { }

  async create(menuDTO: CreateMenuDto): Promise<Menu> {
    const menu = new this.menuModel(menuDTO);
    return await menu.save();
  }

  async findAll(): Promise<Menu[]> {
    return await this.menuModel.find().exec();
  }

  async findOne(id: string): Promise<Menu> {
    return await this.menuModel.findById(id);
  }

  async findBySlug(slug: string): Promise<Menu> {
    return await this.menuModel.findOne({ 'slug': slug }).exec();
  }

  async update(id: string, updateMenuDto: UpdateMenuDto): Promise<Menu> {
    return await this.menuModel.findByIdAndUpdate(id, updateMenuDto).exec();
  }

  async remove(id: string) {
    const deletedMenu = this.menuModel.findOneAndDelete({ _id: id}).exec();
    return (await deletedMenu).remove();
  }
}
