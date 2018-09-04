import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  /**
  * App用サービス
  */
 someMethod() {
    console.log('AppService someMethod()!!!');
  }
}
