import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board, BoardStatus } from './board.model';
import { CreateBoardDto } from './dto/createBoard.dto';

@Controller('boards') // 이 컨트롤러는 boards 의 컨트롤러다
export class BoardsController {
  constructor(private boardsService: BoardsService) {}
  // boardsService 파라미터를 BoardsController 에서 활용하기 위함 (긴걸 최적화 시킨것)
  //private 를 쓰는 이유는 여기서만 쓰기 위해서

  @Get('/') //밑에있는 함수가 어떤 핸들러인지
  getAllBoards(): Board[] {
    return this.boardsService.getAllBoards();
  }

  @Post('/createboard')
  createBoard(@Body() createBoardDto: CreateBoardDto): Board {
    return this.boardsService.createBoard(createBoardDto);
  }
  @Get('/:id')
  getBiardById(@Param('id') id: string) {
    return this.boardsService.getBoardById(id);
  }
  @Delete('/:id')
  deleteBoardById(@Param('id') id: string): void {
    this.boardsService.deleteBoardById(id);
  }
  @Patch('/:id/status')
  updateBoardStatus(
    @Param('id') id: string,
    @Body('status') status: BoardStatus,
  ) {
    return this.boardsService.updateBoardStatus(id, status);
  }
}
