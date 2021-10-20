import { BadRequestException, PipeTransform } from '@nestjs/common';
import { BoardStatus } from '../board-status.enum';
//public와 private 만 status에 올수있게 막아줌
export class BoardStatusValidationPipe implements PipeTransform {
  readonly StatusOpctions = [BoardStatus.PRIVATE, BoardStatus.PUBLIC];

  transform(value: any) {
    value = value.toUpperCase();

    //잘못된 값이 들어오면
    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} 는 state가 될 수 없습니다.`);
    }
    return value;
  }
  private isStatusValid(status: any) {
    const index = this.StatusOpctions.indexOf(status);
    return index !== -1; //값이 StatusOpctions 안에 없으면 index가 -1 로 나와서 false 리턴됨
  }
}
