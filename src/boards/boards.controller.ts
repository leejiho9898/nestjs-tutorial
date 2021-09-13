import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './board.model';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get('/')
  getAllBoards(): Board[] {
    return this.boardsService.getAllBoards();
  }

  @Post('/createboard')
  createBoard(
    @Body('title') title: string,
    @Body('discription') discription: string,
  ): Board {
    return this.boardsService.createBoard(title, discription);
  }
}
