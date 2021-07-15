// 26.

// let str = 'Flash Is mOrNing'
// function changeWord() {
//     var newStr = ""

// for (let i = 0; i<str.length ; i++) {
//     if (str[i]===str[i].toLowerCase()){
//         newStr += str[i].toUpperCase()
//     } else { newStr+=str[i].toLowerCase()}
// }
// return newStr
// }
// console.log(changeWord());

// 27;
// let number = "772276";
// function pasteSymbol() {
//   let lastNumber = "";
//   for (let i = 0; i < number.length; i++) {
//     if (number[i] % 2 === 1 && number[i + 1] % 2 === 1) {
//       lastNumber += number[i] + ":";
//     } else {
//       lastNumber += number[i];
//     }
//   }
//   return lastNumber;
// }

// console.log(pasteSymbol());

// 28------непонятка
// 29;------Калхоз стайл
// let todayYear = '2021';

// function calcYear(todayYear='2021') {

//   let sumYear =Number('')
//   for (let i = 0; i < todayYear.length; i++) {
//     sumYear =sumYear + (todayYear[i]*2/2);
//   }
//   return sumYear;
// }

// console.log(calcYear('2017'));
// 30.
// let word = 'Hi my MASTER Younis(youda+denis)'
// function transformKebabCase () {
//   let changeWord = ''
//   for (let i = 0; i<word.length; i++ ) {
//     if (word[i] == ' ') {
//       changeWord += '-'
//     } else {changeWord+= word[i].toLowerCase()}
//   }
//   return changeWord
// }

// console.log(transformKebabCase());
// 31;
// let String = 'Gap big deal'
// const toUpperCaseSense = String
//    .split(' ')
//    .map((word) => {
//        if(word && word.length)
//       return word.charAt(0).toUpperCase()
//    })
//    .join('.')
//    console.log(toUpperCaseSense);

// 32.


//33.
// let fruits = ['apple','apple','banana','apple','lemon','banana']


// const calcFruits = fruits.reduce((bag, fruit) => {
//    bag[fruit] = (bag[fruit] || 0) + 1
//    return bag
// }, {})
// console.log(calcFruits);

//34