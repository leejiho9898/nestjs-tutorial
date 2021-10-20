import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { v1 as uuid } from 'uuid'; //랜덤 ID값을 주는 라이브러리
import { CreateBoardDto } from './dto/createBoard.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';
import { Board } from './board.entity';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(BoardRepository)
    private boardRepository: BoardRepository,
  ) {}

  async getAllboards(): Promise<Board[]> {
    return this.boardRepository.find();
  }
  // getAllBoards(): Board[] {
  //   return this.boards;
  // }

  createBoard(createBoardDto: CreateBoardDto) {
    return this.boardRepository.createBoard(createBoardDto);
  }
  // createBoard(CreateBoardDto: CreateBoardDto) {
  //   const { title, description } = CreateBoardDto;
  //   const board: Board = {
  //     id: uuid(), //여기서 ID값을 넣어주는 이유는 DB를 사용하지 않기떄문에 임의로 값을 줘야하기 때문
  //     title,
  //     description,
  //     status: BoardStatus.PUBLIC,
  //   };

  //   this.boards.push(board);
  //   return board;
  // }

  async getBoardById(id: number): Promise<Board> {
    const found = await this.boardRepository.findOne(id);
    if (!found) {
      throw new NotFoundException(`${id}값을 가진 게시물을 찾을 수 없습니다.`);
    }
    return found;
  }
  // getBoardById(id: string): Board {
  //   const found = this.boards.find((board) => {
  //     board.id === id;
  //     if (!found)
  //       throw new NotFoundException(`게시물의 id${id}값을 찾을 수 없습니다.`);
  //   });
  //   return found;
  // }

  async deleteBoard(id: number): Promise<void> {
    const result = await this.boardRepository.deleteBoardById(id);
    if (result.affected === 0) {
      throw new NotFoundException(`${id}값을 가진 게시물을 찾을 수 없습니다.`);
    }
  }
  // deleteBoardById(id: string): void {
  //   const found = this.getBoardById(id);
  //   this.boards.filter((board) => {
  //     board.id !== found.id;
  //   });
  // }

  async updateBoardStatus(id: number, status: BoardStatus): Promise<Board> {
    const board = await this.getBoardById(id);

    board.status = status;
    await this.boardRepository.save(board);
    return board;
  }
  // updateBoardStatus(id: string, status: BoardStatus): Board {
  //   const board = this.getBoardById(id);
  //   board.status = status;
  //   return board;
  // }
}
