import styles from './Avatar.css'

const AtavatExample = 'Some tex'

export function Avatar(props) {
    this.template = document.querySelector('#avatar')
    this.insertContainer  = props || 'body'
    this.component = this.template.content.querySelector('div').cloneNode(true) 
    this.show = function() {
        console.log(this.component)
    }
    this.render = function() {
        const insertContainer = document.querySelector(this.insertContainer)
        insertContainer.append(this.component)
    }
}