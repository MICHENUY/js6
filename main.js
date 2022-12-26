// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str = "hello world";
// console.log(str.length);
//
// let hell = "lorem ipsum";
// console.log(hell.length);
//
// let end = "javascript is cool";
// console.log(end.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str = "hello world";
// document.write(str.toUpperCase());
//
// let hell = "lorem ipsum";
// document.write(hell.toUpperCase());
//
// let end = "javascript is cool";
// document.write(end.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str = "HELLO WORLD"
// document.write(str.toLowerCase());
//
// let hell = "LOREM IPSUM";
// document.write(hell.toLowerCase());
//
// let end = "JAVASCRIPT IS COOL"
// document.write(end.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// alert(str.trim())

// - Напишіть функцію stringoarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = "Ревуть воли як ясла повні";
// console.log(str.split(' '))

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let num = [10,8,-7,55,987,-1011,0,1050,0];
//
// let numb = num.map(value => value.toString());
// console.log(numb)

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//

// let nums = [11, 21, 3];
// nums.sort(function (a,b){
//     return  b - a;
// });
// console.log(nums);

// let nums = [11, 21, 3];
// nums.sort(function (a,b){
//     return  a - b;
// });
// console.log(nums);

// є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//


// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// coursesAndDurationArray.sort(function (a,b){
//     return a.monthDuration - b.monthDuration;
// })
// console.log(coursesAndDurationArray);

// let duration = coursesAndDurationArray.filter(value => value.monthDuration >5);
// console.log(duration);

// описати колоду карт

//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

// let game = [
//     { cardSuit: 'spade', color:'black'},
//     { cardSuit:  'clubs', color:'black'},
//     { cardSuit: 'diamond', color:'red'},
//     { cardSuit: 'heart', color:'red'},
// ];
//
// let num = [6,7,8,9,10,'ace','jack','queen','king','joker'];
//
// let games = [];
//
//
// for (let gameElement of game) {
//     for (let numberElement of num) {
//         const card =
//             {
//             cardSuit: gameElement.cardSuit, value:numberElement, color: gameElement. color,}
//
//     games.push(card);
//     }
// }
// console.log(games);
//
// // - знайти піковий туз
// let ace = games.filter( value => value.cardSuit === "spade" && value.value === 'ace');
// console.log(ace)
//
// // - всі шістки
// let six = games.filter(value => value.value === 6 );
// console.log(six)
//
// // - всі червоні карти
// let bluuu = games.filter(value => value.color === 'red');
// console.log(bluuu);
//
// // - всі буби
// let dimon = games.filter(value => value.cardSuit === 'diamond');
// console.log(dimon);
//
// // - всі трефи від 9 та більше
// let tresh = games.filter(value =>value.cardSuit === 'clubs' && value.value >= 9 && value.value === 'ace','jack','queen','king');
// console.log(tresh);

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

// let game = [
//     { cardSuit: 'spade', color:'black'},
//     { cardSuit:  'clubs', color:'black'},
//     { cardSuit: 'diamond', color:'red'},
//     { cardSuit: 'heart', color:'red'},
// ];
//
// let num = [6,7,8,9,10,'ace','jack','queen','king','joker'];
//
// let spades = [];
//
//
// for (let gameElement of game) {
//     for (let numberElement of num) {
//         let card =
//             {
//                 cardSuit: gameElement.cardSuit, value:numberElement, color: gameElement. color,}
//
//         spades.push(card);
//
//
//     }
// }
// console.log(spades);
//
// let spade =  spades.filter(value => value.cardSuit === 'spade');
// console.log(spade);

// let game = [
//     { cardSuit: 'spade', color:'black'},
//     { cardSuit:  'clubs', color:'black'},
//     { cardSuit: 'diamond', color:'red'},
//     { cardSuit: 'heart', color:'red'},
// ];
//
// let num = [6,7,8,9,10,'ace','jack','queen','king','joker'];
//
// let clubs = [];
//
//
// for (let gameElement of game) {
//     for (let numberElement of num) {
//         let card =
//             {
//                 cardSuit: gameElement.cardSuit, value:numberElement, color: gameElement. color,}
//
//         clubs.push(card);
//     }
// }
// console.log(clubs);
//
// let club = clubs.filter(value => value.cardSuit = 'clubs')
// console.log(club)

// let game = [
//     { cardSuit: 'spade', color:'black'},
//     { cardSuit:  'clubs', color:'black'},
//     { cardSuit: 'diamond', color:'red'},
//     { cardSuit: 'heart', color:'red'},
// ];
//
// let num = [6,7,8,9,10,'ace','jack','queen','king','joker'];
//
// let diamonds = [];
//
//
// for (let gameElement of game) {
//     for (let numberElement of num) {
//         const card =
//             {
//                 cardSuit: gameElement.cardSuit, value:numberElement, color: gameElement. color,}
//
//         diamonds.push(card);
//     }
// }
// console.log(diamonds);
//
// let diamond = diamonds.filter(value => value.cardSuit === 'diamond');
// console.log(diamond)

let game = [
    { cardSuit: 'spade', color:'black'},
    { cardSuit:  'clubs', color:'black'},
    { cardSuit: 'diamond', color:'red'},
    { cardSuit: 'heart', color:'red'},
];

let num = [6,7,8,9,10,'ace','jack','queen','king','joker'];

let hearts = [];


for (let gameElement of game) {
    for (let numberElement of num) {
        const card =
            {
                cardSuit: gameElement.cardSuit, value:numberElement, color: gameElement. color,}

        hearts.push(card);
    }
}
console.log(hearts);

let heart = hearts.filter(value => value.cardSuit === 'heart');
console.log(hearts);
