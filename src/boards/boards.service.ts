import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid'; //랜덤 ID값을 주는 라이브러리
import { CreateBoardDto } from './dto/createBoard.dto';
@Injectable()
export class BoardsService {
  private boards: Board[] = []; //private 사용한 이유는 다른 컴포넌트에서 배열값 수정 못하게 하기위해서

  getAllBoards(): Board[] {
    return this.boards;
  }

  createBoard(CreateBoardDto: CreateBoardDto) {
    const { title, description } = CreateBoardDto;
    const board: Board = {
      id: uuid(), //여기서 ID값을 넣어주는 이유는 DB를 사용하지 않기떄문에 임의로 값을 줘야하기 때문
      title,
      description,
      status: BoardStatus.PUBLIC,
    };

    this.boards.push(board);
    return board;
  }

  getBoardById(id: string): Board {
    return this.boards.find((board) => {
      board.id === id;
    });
  }

  deleteBoardById(id: string): void {
    this.boards.filter((board) => {
      board.id !== id;
    });
  }

  updateBoardStatus(id: string, status: BoardStatus): Board {
    const board = this.getBoardById(id);
    board.status = status;
    return board;
  }
}
