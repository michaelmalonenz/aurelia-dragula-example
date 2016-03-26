import uuid from 'node-uuid';

export class Letter {
  constructor(char) {
    this.char = char;
    this.id = uuid.v4();
  }
}