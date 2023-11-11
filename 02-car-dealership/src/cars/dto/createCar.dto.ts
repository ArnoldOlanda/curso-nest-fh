import { IsString, MinLength } from 'class-validator';

export class CreateCarDto {
  @IsString()
  readonly brand: string;

  @IsString()
  @MinLength(5)
  readonly model: string;
}
