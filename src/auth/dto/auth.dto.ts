// to use class validator will need to use class not interface
// export interface AuthDto {
//   email: string;
//   password: string;
// }

import {
  IsNotEmpty,
  IsEmail,
  IsString,
} from 'class-validator';

export class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
