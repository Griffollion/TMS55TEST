### 
- В папке solutions создать папку homework7

- В папке homework7 создать файлик index.html

- В нем сгенерить базовый HTML код (! + tab)

- Здесь же создать файл app.js и подключить его в index.html

- Писать код в app.js в строгом режиме ('use strict')

- Расширяю предыдущий список задач новыми, чтобы вы могли доделать то, что не успели в прошлый раз + новые

- Для текущей домашки добавил задания 41-44. Задачи брал после статей на learn javascript из глав 4.5;6.1;6.3

- Перед кодом задания должен стоять комментарий номера задачи которую вы решаете. Дедлайн 07.07.2021 22:00. Все работы которые придут позже буду проверять по мере возможностей и времени. В приоритете будут работы сданные в срок.


Пример:

//Задание 2
Ваше решение

//Задание 3
Ваше решение

...

---
Задачи:
---

### 1

- Имеется три переменные

```javascript
  a = 1,
  b = 2,
  c = " белых медведей".
```

- Сложите переменные так, чтобы в результате получилось выражение: "12 белых медведей" и выведите результат в консоль.

---

### 2

-   Создайте переменные a=10, b=2 и c=5. Выведите на экран и в консоль их сумму.

---

### 3

-   Переделайте этот код так, чтобы в нем использовались операции ++ и --.
-   Количество строк кода при этом не должно измениться.

```javascript
let num = 10;
num = num + 1;
num = num + 1;
num = num - 1;
alert(num);
```

---

### 4

-   Создайте 5 чисел и найдите наибольшее при помощи условий

---

### 5

-   Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:

```
  5 % 3,
  3 % 5,
  5 + '3',
  '5' - 3,
  75 + 'кг'
```

-   Вывести все результаты через запятую используя alert или console.log

---

### 6

-   Напишите программу, которая сравнит 2 числа и выведет в алерт наименьшее.

---

### 7

-   Напишите цикл от 0 до 15. И в каждой итерации цикла нужно проверить четное число или нечетное.
-   И вывести в консоли, результат будет выглядеть примерно так:
-   0 это четное
-   1 это нечетное

---

### 8

-   Написать цикл, который будет итерироватся от 1 до 100.
-   На каждой итерации цикла нужно проверить:
-   если число кратное 3 - то вывести в консоль строку Fizz,
-   если число кратное 5 - то вывести в консоль строку Buzz,
-   если число кратное и 3 и 5 - то вывести FizzBuzz

---

### 9

-   Написать цикл от 0 до 1000. Высчитать сумму всех чисел кратных 4 и сумму всех чисел кратных 3.

---

### 10

-   Создайте три переменные a1, a2, a3 и положите в них числа (желательно использовать
-   как положительные так и отрицательные числа). Используя условные операторы
    найдите знаки этих чисел (это может быть - или ничего).
-   Результат должен быть выведен через alert, который содержит сообщение
-   следующего вида: Знаки чисел a1, a2, a3: -, ,- (например a1 = -14, a2 = 10, a3 = -12);

---

### 11

-   Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
-   При помощи оператора определения типа убедитесь, что переменных принадлежат типам: string, number, boolean.

---

### 12

Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов найдите значения выражений:

```javascript
(5 + 3) * (5 - 3), (10 - 6) * 200, (534 * 132) / 18, 123 * 3 + 10, 12 * 13 * 14;
```

-   Поместив результат каждого выражения в соответствующую переменную.
-   Вывести все результаты через запятую используя alert или console.log

---

### 13

- С помощью диалогового окна prompt попросите пользователя ввести любое челое число. После чего отобразите alert, говорящий четное или не четное это число.

---

### 14

-   Даны размер кредита — 1 тыс.бел.руб,
-   процентная ставка — 10%,
-   количество лет — 5.
-   Найти переплату по кредиту.

---

### 15

- Создайте объект product со следующими свойствами: name, price, type, releaseDate, manufacturer, country, isGaranty. Заполните из значениями, кажущимися вам подходящими. И выведите значение каждого из свойств в консоль.

---

### 16

- Фильтр юзеров
Создать массив объектов для юзеров.
Прим.

```javascript
[{name: ‘Ivan’, age: 18}, {name: ‘Petr’, age: 12}, {name: ‘Sidor’, age: 25}, {...}, ...]
```

Написать скрипт, который будет определять соверношеннолетний пользователь или нет и класть его в определенный массив. Первый массив с совершеннолетними пользователями, второй с несовершеннолетними. 

Чуть более продвинутое задание. Нужны доп. знания, которые мы не проходили. Для добавления элемента в массив используется метод push https://learn.javascript.ru/array-methods

---

### 17

-   Написать программу, которая будет выводить в консоль лесенку (помогут в разработке: цикл for; спецсимвол \n )
    
    Чуть более продвинутое задание. Нужны доп. знания, которые мы не проходили. Если кому интересно можно почитать тут https://learn.javascript.ru/string

    ```
        #
        ##
        ###
        ####
        #####
        ######
    ```

---

### 18

Дана строка. Сделайте заглавным первый символ каждого слова этой строки.

---

### 19

Написать функцию, которая будет высчитывать сумму чисел от нуля, до параметра, который мы в неё передаем, например: getSum(100) должна передавать сумму чисел от 0 до 100 (должно получится 5050)

---

### 20

Суммирование чисел в массиве
Прим. есть массив чисел

```javascript
var numbers = [10, 25, 100];
```

Hа выходе должны получить переменную, в которой будет содержаться сумма этих чисел (135)
Расширить функционал, так, чтобы скрипт игнорировал другие типы данных.

---

### 21

Напишите функцию, которая находит площадь прямоугольника и возвращает ее. Высота и ширина прямоугольника должны передаваться через параметры.

---

### 22

-   Создать объект пользователя интернет магазина,
-   объект должен содержать следущие поля: имя, email, нравятся ли ему фрукты, показатель IQ.
-   Созданный объект вывести в консоли.

---

### 23

-   У нас есть студенты: Вася, Зина, Катя, Петя, Вова. Они решали финальный тест

    -   и процент выполнения теста таков: Вася - 80, Зина - 77, Катя - 88, Петя - 95, Вова - 57.

    *   Оценки рассчитываются следующим образом:
        -   если процент > 90 - 5
        -   если процент > 80 - 4
        -   если процент > 70 - 3
        -   если процент > 60 - 2

    -   Ответ вывести следующим образом:

    ```
      Вася - 2,
      Зина - 3
       ...
    ```

---

### 24

-   Написать ф-цию, которая принимает массив объектов типа {name: 'Jonh', age: 20}
-   и возвращает массив значений лежащих в поле age

```javascript
function getAges(array) {}

getAges([
    { name: 'Sergey', age: 33 },
    { name: 'Daria', age: 33 },
]); // => [33, 33]
```

---

### 25

-   Написать ф-цию, которая принимает массив объектов типа {name: 'Jonh', age: 20}
-   и вторым параметром ключ, по которому надо собрать массив

```javascript
function getAges(array, key) {}

getAges(
    [
        { name: 'Sergey', age: 33 },
        { name: 'Daria', age: 33 },
    ],
    'name'
); // => ['Sergey', 'Daria']

getAges(
    [
        { name: 'Sergey', age: 33 },
        { name: 'Daria', age: 33 },
    ],
    'age'
); // => [33, 33]
```

---

### 26

-   Написать код, который заменит регистр каждого символа на противоположный.
-   Например 'Hello world' -> 'hELLO WORLD'

---

### 27

-   Напишите код, который добавит символ двоеточие(':') между нечетными числами.
-   Например, число 556 результат должен быть '5:56', 566 -> 566, 655 -> 65:5

---

### 28

-   Написать функцию, которая принимает первым аргументом условие,
-   вторым и третьим аргументом функции(функции могут делать все что угодно на ваш выбор).
-   Внутри если условие равно true, то выполнить первую функцию, если false, то выполнить вторую функцию.

---

### 29

-   Написать функцию, которая будет принимать число (дефолтное значение 2021) и вычисляет сумму цифр из которых состоит число.
-   Для 2021 это будет 5.

---

### 30

-   Написать функцию, которая приобразуем любую строку в строку написанную кебаб кейсом (все буквы с маленькой буквы и на месте пробелов - тире)
-   Например:
-   'Hello World' -> 'hello-world';
-   'Hello dear hell' -> 'hello-dear-hell'

---

### 31

-   Написать функцию, которая из любой фразы сделает вернет ее абревиатуру.
-   'Республика беларусь' -> 'РБ'
-   'Минск' -> 'М'

---

### 32

-   Написать функцию, которая из любой фразы сделает вернет ее абревиатуру.
-   'Республика беларусь' -> 'РБ'
-   'Минск' -> 'М'

---

### 33

-   Написать функцию, которая принимает массив строк в которых записаны названия фруктов.
В названия фруктов обязательно должны повторяться! Результатом выолнения функции должен быть объект, свойствами которого являются названия фруктов,
а в значениях свойств - сколько раз этот фрукт встречался в массиве. 
-   Примеры данных
-   Вход ['apple','apple','banana','apple','lemon','banana']
-   Результат выполнения функции {apple: 3, banana: 2, lemon: 1}

---

### 34

-   Написать ф-цию, которая принимает объект и меняет местами ключи и значения

```javascript
function convertObject(obj) {}

convertObject({ a: 'b', c: 'd' }); // => { b: 'a', d: 'c' }
```

---

### 35

-   Напишите код, который переворачивает исходный массив и сохраняет это в новую переменную.
-   Например: исходный массив - [1, 2, 3], результирующий массив - [3, 2, 1]

---

### 36

-   Создать массив из 20 чисел. Необходимо высчитать сумму всех элементов.(Используем reduce)

---

### 37

-   Написать ф-цию, которая принимает объект и меняет местами ключи и значения. В функции не должны использоваться конструкции for или for of для массивов. Задание можно реализовать при помощи методов массива forEach или reduce. Также вам помогут методы Object.keys и Object.values

```javascript
function convertObject(obj) {}

convertObject({ a: 'b', c: 'd' }); // => { b: 'a', d: 'c' }
```

---

### 38

-   Написать ф-цию, которая принимает массив объектов.
-   Значения этих объектов - числа. Вернуть объект с суммами ключей. В функции не должны использоваться конструкции for или for of для массивов. Массивы обрабатываем через методы.

```javascript
function calculate(array) {}

calculate([
    { x: 1, z: 2, y: 3 },
    { x: 10, z: 21, y: 4 },
    { x: 2, z: 3, y: 4 },
    { a: 1, b: 2 },
]);
// => { x: 13, z: 26, y: 11, a: 1, b: 2 }
```

---

### 39

-   Создать массив объектов с полями: имя, пол. Разделить этот массив на 2 массива (женский и мужской).
-   Использовать reduce.

---

### 40

-   Напишите функцию, которая очищает массив от нежелательных значений,
-   таких как false, undefined, пустые строки, 0, null. В функции не должны использоваться конструкции for или for of для массивов. Используем методы.

---

### 41

-   Описание задачи: Напишите функцию, которая разделит массив на части заданного размера и
-   вернет массив элементами которого являются эти части.
-   Пример функции:
    ```javascript
        splitArray([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
    ```

---

### 42

- Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:

- read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
- sum() возвращает сумму введённых свойств.
- mul() возвращает произведение введённых свойств.

- Например

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

---

### 43
- Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
- Делаем через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.

Примеры работы функции
sumTo(1) //1
sumTo(2) //3
sumTo(3) // 3 + 2 + 1 = 6
...
sumTo(100) // 100 + 99 + ... + 2 + 1 = 5050

---

### 44

- Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.

- Да, именно таким образом, используя двойные круглые скобки (не опечатка).

- Например:

sum(1)(2) = 3
sum(5)(-1) = 4

---

