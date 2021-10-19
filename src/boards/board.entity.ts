import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BoardStatus } from './board.model';

@Entity() 
//@Entity({name :'users'}) 테이블명을 따로 지정하지 않아도 클래스명으로 매핑하지만, 이런식으로 옵션으로 테이블명을 지정할 수 있음.
//추가적인옵션으로는 
//name: 테이블 이름. 지정하지 않으면 테이블 이름은 엔티티 클래스명으로 생성됨
//database: 선택된 DB서버의 데이터베이스 이름
//schema: 스키마 이름
//engine: 테이블 생성 중에 설정할 수 있는 DB엔진 이름
//synchronize: false로 설정할 시 스키머 싱크를 건너뜀
//orderBy: QueryBuilder과 find를 실행할 때 엔티티의 기본순서를 지정함
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: BoardStatus;
}
