import { ApiProperty } from '@nestjs/swagger';
import { Gender } from '@prisma/client';
import { IsEmail, IsEnum, IsNotEmpty } from 'class-validator';
import { OptionalProperty } from '../../decorators/validator.decorator';

export enum UpdateUserInterestType {
  DELETE = 'DELETE',
  CONNECT = 'CONNECT',
}

export class CityDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  country: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  latitude: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  longitude: number;
}
export class UpdateUserDto {
  @OptionalProperty()
  fullName: string;
  @OptionalProperty()
  nickname: string;
  @OptionalProperty()
  shortId: string;
  @OptionalProperty()
  phoneNumber: string;
  @OptionalProperty()
  country: string;
  @OptionalProperty()
  address: string;
  @OptionalProperty()
  company: string;
  @OptionalProperty()
  jobTitle: string;
  @OptionalProperty()
  description: string;
  @OptionalProperty({ enum: Gender })
  @IsEnum(Gender)
  gender: Gender;
  @OptionalProperty({ isArray: true })
  categories: string[];
  @OptionalProperty()
  cityId: string
  @OptionalProperty()
  isPrivate: boolean
}

export class UpdateAvatarDto {
  @ApiProperty({ type: 'string', format: 'binary', required: true })
  file: Express.Multer.File;
}

export class ManualCreateUserDto {
  @ApiProperty({ required: true, description: 'This is required field' })
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @ApiProperty({ required: true })
  @IsNotEmpty()
  fullName: string;
  @ApiProperty({ required: true })
  @IsNotEmpty()
  company: string;
  @OptionalProperty()
  jobTitle: string;
  @ApiProperty({ required: true })
  @IsNotEmpty()
  eventId: string;
  @OptionalProperty({ type: 'string', isArray: true })
  @IsNotEmpty()
  phaseIds: string[];
  @OptionalProperty()
  knowEventBy: string;
  @OptionalProperty()
  linkedInUrl: string;
  @OptionalProperty()
  companyUrl: string;
  @ApiProperty({ required: true })
  @IsNotEmpty()
  telegramId: string;
  @OptionalProperty()
  userId: string;
}

export class UpdateSettingDto {
  @OptionalProperty({ description: 'Y | N' })
  isPrivate: string;
}
