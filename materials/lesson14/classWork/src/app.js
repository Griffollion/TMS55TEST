import styles from './styles.css'
import { Button } from './components/Button/Button'
import { Avatar } from './components/Avatar/Avatar'
import { List } from './components/List/List'
import { Tooltip, TooltipChild, Parent } from './components/Tooltip/Tooltip'

const button = new Button()
button.render()

const button2 = new Button()
button2.render()

const avatar = new Avatar()
avatar.show()
avatar.render()

const listsContainers = [{ text: 'List1', container: '#app' }, { text: 'List2', container: 'body' }]

listsContainers.forEach(props => {
  const list = new List(props)
  list.render()
})

// Classes
const zzz = new Tooltip('Some text')
console.log(zzz)
zzz.show()

const tooltipChild = new TooltipChild('ZZz')

// Обычные методы
console.log('Собственное свойство', tooltipChild.getText())
tooltipChild.setText('1233333')
console.log('Собственное свойство', tooltipChild.getText())

// Геттеры и сеттеры
console.log('Геттер', tooltipChild.text)
tooltipChild.text = 'Million'
console.log('После сеттера', tooltipChild.text)

tooltipChild.getText()
tooltipChild.setText('1233333')

tooltipChild.text
tooltipChild.text = 'Million'
console.log(tooltipChild.getSomeStrangeText())

// const parent = new Parent()
// parent.sayHi()
