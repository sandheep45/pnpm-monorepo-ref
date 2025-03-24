import { Injectable } from '@nestjs/common';
import { sum } from '@libs/shared-utils';

@Injectable()
export class AppService {
  getHello(): string {
    console.log(sum(18, 4));
    return 'Hello World!';
  }
}
