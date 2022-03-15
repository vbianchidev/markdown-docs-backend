import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { UserResgisterRequestDto } from './dto/create-user.req.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>
  ) { }
  
  async doUserRegistration(
    userData: UserResgisterRequestDto
  ): Promise<User> {
    const user = new this.userModel();
    user.name = userData.name;
    user.email = userData.email;
    user.password = userData.password
    return await user.save();
  }
}
