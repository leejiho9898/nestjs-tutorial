import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([BoardRepository])
  ],
  controllers: [BoardsController], //들어오는 요청을 처리하고 클라이언트에 응답을 반환함
  providers: [BoardsService] //서비스를 어떤걸 쓸지 결정함
})
export class BoardsModule {}
