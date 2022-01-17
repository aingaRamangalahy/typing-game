import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'typing-game';
  randomText =
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab repudiandae vero, architecto possimus';
  enteredText = '';
  emitError: boolean = false

  onInput(value: string) {
    this.enteredText = value;
  }

  compare(randomLetter, enteredLetter) {
    if (!enteredLetter) return 'pending';
    return randomLetter === enteredLetter ? 'correct' : 'incorrect';
  }
}
