import { RandString } from './randString'

export class Multiarray {
  constructor () {
    this.arra = [new RandString(), new RandString(), new RandString()]
    this.arrb = [new RandString(), new RandString()]
    this.arrc = [new RandString()]
  }

  itemDropped (item, target, source, sibling) {
    let theItem
    let sourceArr
    let targetArr
    let siblingIndex

    switch (source.dataset.list) {
      case 'arra':
        sourceArr = this.arra
        break
      case 'arrb':
        sourceArr = this.arrb
        break
      case 'arrc':
        sourceArr = this.arrc
        break
      default:
        break
    }

    switch (target.dataset.list) {
      case 'arra':
        targetArr = this.arra
        break
      case 'arrb':
        targetArr = this.arrb
        break
      case 'arrc':
        targetArr = this.arrc
        break
      default:
        break
    }

    theItem = sourceArr[parseInt(item.dataset.index)]
    siblingIndex = sibling != null ? parseInt(sibling.dataset.index) : 'end'

    sourceArr.splice(parseInt(item.dataset.index), 1)
    if (parseInt(siblingIndex) === 0) {
      targetArr.unshift(theItem)
    } else if (siblingIndex === 'end') {
      targetArr.push(theItem)
    } else {
      if (source.dataset.list === target.dataset.list) {
        siblingIndex--
      }
      targetArr.splice(parseInt(siblingIndex), 0, theItem)
    }
  }
}
