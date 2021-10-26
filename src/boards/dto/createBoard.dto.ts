import { Board } from '../board.entity';
import { PickType } from '@nestjs/swagger';

export class CreateBoardDto extends PickType(Board, [
  'title',
  'description',
  'status',
  'deadline',
]) {}

// import { IsNotEmpty } from 'class-validator';

// export class CreateBoardDto {
//   @IsNotEmpty()
//   title: string;

//   @IsNotEmpty()
//   description: string;
// }
