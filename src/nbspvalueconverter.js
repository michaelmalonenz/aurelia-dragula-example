export class NbspValueConverter {

  toView(value) {
    if (value.trim() === '') {
      return '\xa0'
    }
    else {
      return value;
    }
  }

}