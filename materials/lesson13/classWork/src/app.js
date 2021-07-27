import styles from './styles.css'
import { Button } from './components/Button/Button'
import { Avatar } from './components/Avatar/Avatar'
import { List } from './components/List/List'

const button = new Button()
button.render()

const button2 = new Button()
button2.render()

const avatar = new Avatar()
avatar.show()
avatar.render()

const listsContainers = [{text: 'List1', container: '#app'}, {text: 'List2', container: 'body'}]

listsContainers.forEach(props => {
    const list = new List(props)
    list.render()
})