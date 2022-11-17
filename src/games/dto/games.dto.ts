import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsEnum } from 'class-validator';
enum order {
  ASC = 'ASC',
  DESC = 'DESC',
}

export class CreateGameDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  public title: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  public platform: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsOptional()
  public score: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  public genre: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsOptional()
  public editors_choice: string;
}

export class UpdateGameDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public title: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public platform: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsOptional()
  public score: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public genre: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsOptional()
  public editors_choice: string;
}

export class FindGameDto {
  @ApiProperty()
  public platform: string;

  @ApiProperty()
  public genre: string;

  @ApiProperty()
  public editors_choice: string;

  @ApiPropertyOptional({
    enum: order,
    default: order.ASC,
  })
  @IsEnum(order, {
    message: 'Must be either ASC or DESC',
  })
  public order: number;
}
