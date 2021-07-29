import styles from './Button.css'

export function Button () {
  this.template = document.createElement('div')
  this.template.className = 'button'
  this.template.textContent = 'Cool text'
  this.render = function () {
    const body = document.body
    body.append(this.template)
  }
  this.template.onclick = function () {
    this.classList.toggle('accent')
  }
}
