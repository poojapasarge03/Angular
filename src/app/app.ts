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
  name = "Pooja"
  age = 20

  updateName(){
    this.name = "Pasarge";
  }

  callme(){
    alert("Button clicked")
  }

  sayHello(){
    console.log("HEllo Guys")
  }
}
