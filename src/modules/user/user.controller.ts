import { Body, Controller, Post } from '@nestjs/common';
import { SETTINGS } from 'src/utils/validations.utils';

import { UserResgisterRequestDto } from './dto/create-user.req.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController { 
  constructor(private readonly userService: UserService) {}

  @Post('/signup')
  async doUserRegistration( 
    @Body(SETTINGS.VALIDATION_PIPE) 
    userData: UserResgisterRequestDto 
  ): Promise<User> {
    return await this.userService.doUserRegistration(userData);
  }
}
