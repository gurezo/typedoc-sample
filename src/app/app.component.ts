import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // comment test
  title = 'test';

  constructor(
    private appService: AppService
  ) {
    this.appService.someMethod();
  }

  /**
  * 関数の説明
  * @param path ダミー引数
  * @return ダミー戻り値
  */
  sampleMethod(path: string): string {
    return path;
  }
}
