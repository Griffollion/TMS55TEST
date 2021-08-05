// class Human {
//   constructor(arms = 2, head = 1, body = 1,legs = 2, skin = 'white') {
//     this.arms = arms
//     this.head = head
//     this.body = body
//     this.legs = legs
//     this.skin = skin
//   } 

//   showParams() {
//     console.log('Количество частей тела у человека ' + this._getTotalHumanParts())
//   }

//   _getTotalHumanParts() {
//     const result = this.arms + this.head + this.body + this.legs
//     return result
//   }

//   shayHi() {
//     console.log('Hi!')
//   }
// }

// class Asians extends Human {
//   constructor(name = 'Wong',height) {
//     super()
//     this.height = height
//     this.name = name
//   }
//   showHeight() {
//     console.log('Рост: '+this.height)
//   }

//   showName() {
//     console.log(this.name)
//   }

//   changeName(value) {
//     this.name = value
//     this.showName()
//   }

//   shayHi() {
//     console.log(`Nihao, My name is ${this.name}`)
//   }
// }

// Концепция наследования
// const human = new Human()
// const asiat = new Asians(150)
// console.log(human)
// console.log(asiat)

// human.showParams()
// asiat.showHeight()

// Пример использования
// const dataBase = [{height:150, name: 'Yen'},{height:120, name: 'Jin'}, {height:170, name: 'Bruce'}]


// const asiats = dataBase.map(el => {
//   const asiat = new Asians(el.name, el.height)
//   return asiat
// })

// console.log(asiats)
// asiats[0].showName()
// asiats[0].changeName('Donni-YEan')

// ПОЛИМОРФИЗМ
// const human = new Human()
// const asiat = new Asians('Yen',150)
// console.log(human)
// console.log(asiat)
// human.shayHi()
// asiat.shayHi()

// Реализация через функции
// function Human(arms = 2, head = 1, body = 1,legs = 2) {
//   this.arms = arms
//   this.head = head
//   this.body = body
//   this.legs = legs
// }

// function Asiats () {
//   Human.call(this)
//   this.sayHi = function () {
//     console.log('Konichiva')
//   }
// }

// const human = new Human(6,8,9,7)
// const human2 = new Human(1,2,3,4)
// const asiat = new Asiats()
// const asiat2 = new Asiats()

// console.log(human)
// console.log(human2)
// console.log(asiat)

// Расширение функции - конструктора через прототип
// const human = new Human()
// const asiat = Object.create(human)
// console.log(human)
// console.log(asiat)

// Human.prototype._getTotalHumanParts = function () {
//   const result = this.arms + this.head + this.body + this.legs
//   return result
// }

// Human.prototype.showParams = function () {
//   console.log('Количество частей тела у человека ' + this._getTotalHumanParts())
// }

// human.showParams()
// console.log(asiat.arms)



