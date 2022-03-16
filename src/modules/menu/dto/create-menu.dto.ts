import { IsNotEmpty } from 'class-validator';

export class CreateMenuDto {
  @IsNotEmpty()
  name: string;

  parent: string | null;

  @IsNotEmpty()
  pageId: string;
}
