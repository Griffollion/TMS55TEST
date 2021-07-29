import styles from './Tooltip.css'
import { Template } from './TooltipTemplate'

export class Tooltip {
  constructor (text, template = Template) {
    this.text = text
    this.component = template
  }

  show () {
    console.dir(this.component)
  }
}

export class TooltipChild extends Tooltip {
  getText () {
    return this.text
  }

  setText (val) {
    this.text = val
  }

  get text () {
    return this._text
  }

  set text (value) {
    this._text = value
  }

  getSomeStrangeText () {
    return this.getText() + 'Some strange text'
  }
}

// export function Parent() {
//     this.name = 'Denis'
// }

// Parent.prototype.sayHi = function() {
//     console.log(this.name)
// }
