import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // comment test
  title = 'test';

  /**
  * 関数の説明
  * @param path ダミー引数
  * @return ダミー戻り値
  */
  sampleMethod(path: string): string {
    return path;
  }
}
