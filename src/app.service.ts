import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  Hio():string {
    return '<h1>Kuy</h1>'
  }
}
