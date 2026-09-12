import { Component, signal } from '@angular/core';


@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-app');

  count = 0;
  counter(action: string) {
    if (action === 'minus') {
      this.count > 0 && this.count--;
    } else {
      this.count++;
    }
  }

}
