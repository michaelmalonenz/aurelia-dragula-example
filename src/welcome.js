import {ArrayExtensions} from './arrayextensions';
import {Letter} from './letter';
import {moveBefore, DIRECTION} from 'aurelia-dragula';

export class Welcome {

  constructor() {
    this.dragDirection = DIRECTION.HORIZONTAL;
    this.reset();
    this.questionLetters = [];
    this._gatherStringToArray(this.questionLetters, "Will you marry me?");
  }

  get unjumbledName() {
    return this.nameLetters.reduce((previous, current) => previous + current.char, '');
  }

  submit() {
    this.nameLetters = [];
    this._gatherStringToArray(this.nameLetters, this.firstName);

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
    if (this.unjumbledName === 'Farah')
      this.farahWinner = true;
    else if (this.unjumbledName === this.firstName)
      this.winner = true;
  }

  reset() {
    this.firstName = '';
    this.haveName = false;
    this.winner = false;
  }

  _gatherStringToArray(array, string) {
     for(let i = 0; i < string.length; i++) {
      array.push(new Letter(string.charAt(i)));
    }
  }
}
