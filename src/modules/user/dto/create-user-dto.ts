import { IsEmail, IsNotEmpty, Length, Matches } from 'class-validator';
import { MESSAGES } from 'src/utils/messages.utils';
import { REGEX } from 'src/utils/regex.utils';

export class CreateUserDto{
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(8, 24)
  @Matches(REGEX.PASSWORD_RULE, { message: MESSAGES.PASSWORD_RULE_MESSAGE })
  password: string;
}
