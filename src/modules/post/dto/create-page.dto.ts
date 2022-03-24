import { IsNotEmpty } from 'class-validator';

export class CreatePageDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  markdown: string;
}
