let nothing;
console.log(nothing);
console.log(typeof nothing);

let HowManyCarsIhave = null;
console.log(HowManyCarsIhave);
console.log(typeof HowManyCarsIhave);

let User = 'Artyom';
console.log(User);
console.log(typeof User);

let Age = 29;
Age = 30;
Age = String(Age);
console.log(Age);
console.log(typeof Age);

const BirthDate = '26 of July';
console.log(BirthDate);
console.log(typeof BirthDate);

let CanIGoSleeping = false;
    if (CanIGoSleeping) {
        console.log('Yes')
    }
    else {
        console.log('Nope')
    }
console.log(typeof CanIGoSleeping)

let TheBigNumber = 9999234567894561234569999999999999999999999999999789n;
console.log(TheBigNumber);
console.log(typeof TheBigNumber);

let SymA = Symbol();
let SymB = Symbol();
console.log(SymA === SymB);
console.log(typeof SymA);