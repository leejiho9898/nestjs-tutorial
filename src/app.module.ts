import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';


@Module({
  imports: [BoardsModule],

}) //모듈의 허브 라고 생각하면됨 다른 모듈들 모아주는기능
export class AppModule {}
