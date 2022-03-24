import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PageService } from './page.service';
import { CreatePageDto } from './dto/create-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';

@Controller('page')
export class PageController {
  constructor(private readonly _service: PageService) {}

  @Post()
  async create(@Body() createPagetDto: CreatePageDto) {
    return await this._service.create(createPagetDto);
  }

  @Get()
  async findAll() {
    return await this._service.getAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this._service.getOne(id);
  }

  @Get('find/:slug')
  async findBySlug(@Param('slug') slug: string) {
    return await this._service.findBySlug(slug.toLowerCase());
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePageDto: UpdatePageDto) {
    return await this._service.update(id, updatePageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this._service.remove(id);
  }
}
