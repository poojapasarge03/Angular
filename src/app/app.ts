import { Component, signal } from '@angular/core';
import { Profile } from './profile/profile';
import { Navbar } from './navbar/navbar';

@Component({
  imports: [Profile, Navbar],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-app');
  
  count = 0;
  counter() {
    this.count++;
    console.log(this.count);
  }

  
}
