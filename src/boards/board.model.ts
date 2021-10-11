export interface Board {
  id: string;
  title: string;
  description: string;
  status: BoardStatus;
}

export enum BoardStatus { //기대하지 않은 값을 제거함
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
