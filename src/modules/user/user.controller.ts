import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { SETTINGS } from 'src/utils/validations.utils';

import { CreateUserDto } from './dto/create-user-dto';
import { UpdateUserDto } from './dto/update-user-dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly _service: UserService) {}
  
  @Post()
  create( @Body(SETTINGS.VALIDATION_PIPE) createDTO: CreateUserDto ) {
    return this._service.create(createDTO);
  }

  @Get()
  findAll() {
    return this._service.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this._service.getOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body(SETTINGS.VALIDATION_PIPE) updateDTO: UpdateUserDto) {
    return this._service.update(id, updateDTO);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this._service.remove(id);
  }

}
