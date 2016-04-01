import LoremIpsum from 'lorem-ipsum';

export class RandString{
  constructor(){
    this.text = LoremIpsum({
      count: 1,
      units: 'sentences'
    })
  }
}
