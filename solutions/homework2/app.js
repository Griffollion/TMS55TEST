let nothing;
console.log(nothing);
console.log(typeof nothing);

let howManyCarsIhave = null;
console.log(howManyCarsIhave);
console.log(typeof howManyCarsIhave);

let user = 'Artyom';
console.log(user);
console.log(typeof user);

let age = 29;
age = 30;
age = String(age);
console.log(age);
console.log(typeof age);

const birthDate = '26 of July';
console.log(birthDate);
console.log(typeof birthDate);

let canIGoSleeping = false;
    if (canIGoSleeping) {
        console.log('Yes')
    }
    else {
        console.log('Nope')
    }
console.log(typeof canIGoSleeping)

let theBigNumber = 9999234567894561234569999999999999999999999999999789n;
console.log(theBigNumber);
console.log(typeof theBigNumber);

let symA = Symbol();
let symB = Symbol();
console.log(symA === symB);
console.log(typeof symA);