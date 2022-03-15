import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { UserResgisterRequestDto } from './dto/create-user.req.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async doUserRegistration(userDTO: UserResgisterRequestDto): Promise<User> {
    const user = new this.userModel(userDTO);
    return await user.save();
  }
}
