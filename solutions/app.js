
//Задание 23 
let students = [
    {
        name: 'Вася',
        test: 80
    },
    {
        name: 'Зина',
        test: 77
    },
    {
        name: 'Катя',
        test: 88
    },
    {
        name: 'Петя',
        test: 95
    },
    {
        name: 'Вова',
        test: 57
    },

]
for (let i = 0; i < students.length; i++) {
    if (students[i].test >= 90) {
        console.log(`${students[i].name} - 5`);
    } else if (students[i].test >= 80 && students[i].test < 90) {
        console.log(`${students[i].name} - 4`);
    } else if (students[i].test >= 70 && students[i].test < 80) {
        console.log(`${students[i].name} - 3`);
    } else {
        console.log(`${students[i].name} - 2`)
    }
}

//Задание 33

function countNumberFruits() {
    let fruits = ['apple', 'apple', 'banana', 'apple', 'lemon', 'banana']
    let countFruit = {}
    for (let i = 0; i < fruits.length; i++) {
        let j = fruits[i]
        if (countFruit[j] != undefined) {
            countFruit[j]++
        } else {
            countFruit[j] = 1
        }
    }
    return countFruit
}
let result = countNumberFruits()
console.log(result)


//Задание 34

let variables = {
    a: "b",
    c: "d",
};

let arrKeys = [];
for (key in variables) {
    arrKeys.push(key);
}

let arrValues = [];
for (key in variables) {
    arrValues.push(variables[key]);
}

function exchange(object) {
    let newVariables = {};
    for (let i = 0; i < arrKeys.length; i++) {
        newVariables[arrValues[i]] = arrKeys[i];
    }
    return newVariables;
}
console.log(exchange(variables));



