import styles from './List.css'
import { ListTemplate } from './ListTemplate'

export function List (props) {
  this.component = ListTemplate.content.querySelector('ul').cloneNode(true)
  this.listItems = this.component.querySelectorAll('li')
  this._changeListText = function (text) {
    this.listItems.forEach(el => {
      el.textContent = text
    })
  }
  this.show = function () {
    console.log(this.component)
  }
  this.render = function () {
    this._changeListText(props.text)
    const container = document.querySelector(props.container)
    container.append(this.component)
  }
}
