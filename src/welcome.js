import {ArrayExtensions} from './arrayextensions';
import {Letter} from './letter';
import {moveBefore, DIRECTION} from 'aurelia-dragula';

export class Welcome {

  constructor() {
    this.dragDirection = DIRECTION.HORIZONTAL;
    this.reset();
  }

  get unjumbledName() {
    return this.nameLetters.reduce((previous, current) => previous + current.char, '');
  }

  submit() {
    this.nameLetters = [];
    for(let i = 0; i < this.firstName.length; i++) {
      this.nameLetters.push(new Letter(this.firstName.charAt(i)));
    }

    do {
      ArrayExtensions.shuffle(this.nameLetters);
    }
    //If, by chance, we shuffle it to the same as the original name, keep shuffling until it no longer is
    while(this.unjumbledName === this.firstName)

    this.haveName = true;
  }

  drop(item, target, source, sibling) {
    let itemId = item.dataset.id;
    let siblingId = sibling ? sibling.dataset.id : null;
    moveBefore(this.nameLetters, (letter) => letter.id === itemId, (letter) => letter.id === siblingId);
    if (this.unjumbledName === this.firstName)
      this.winner = true;
  }

  reset() {
    this.firstName = '';
    this.haveName = false;
    this.winner = false;
  }
}
