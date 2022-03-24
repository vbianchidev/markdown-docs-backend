import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MongoGenericRepository } from 'src/core/base/mongo.generic.repository';
import { CreateUserDto } from './dto/create-user-dto';

import { User } from './entities/user.entity';

@Injectable()
export class UserService extends MongoGenericRepository<CreateUserDto> {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>
  ) {
    super(userModel);
  }
}
