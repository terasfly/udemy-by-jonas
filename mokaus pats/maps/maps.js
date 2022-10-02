/*const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        },
    },
    orderPasta: function(ing1, ing2, ing3) {
        console.log(`here is your pasta {ing1},{ing2},{ing3}`)
    }
}

const rest = new Map();
rest.set('name', 'Classico Italiano')
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon,Portugal')

const changeRest = rest.set(3, 'Lisbon,Portugal')
console.log(changeRest);

rest
    .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are open✌')
    .set(false, 'We are closed 😒')

// Use get method

console.log(rest.get('name'))
console.log(rest.get('categories'))
const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')))

console.log(rest.has('categories'));
rest.delete(2)
console.log(rest.size)
rest.set(document.querySelector('h1'), 'heading')
console.log(rest)
    // const rest = new Map();
    // rest.set('name', 'Classico Italiano');
    // rest.set(1, 'Firenze,Italy')
    // console.log(rest.set(2, 'Lisbon, Portugal'));



// const food = new Set(['Apple', 'Carrot', 'Grapes', 'Apple', 'Eggs'])


// for (const foodBasket of food)
//     console.log(foodBasket);
const food = new Map()
food.set(1, 'Eggs')
food.set(2, 'Potato')
food.set(3, 'Salad')
food.set(4, 'Drink')

const foodInBasket = food.set(1, 'lasiniai')
const foodBin = food.delete(3)
const addFood = food.set(4, 'Fish')
console.log(foodInBasket);
console.log(food)

const question = new Map([
    ['question', 'What is the best programing language?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    // ['Correct', 3],
    [true, 'Correct'],
    [false, 'Try again!'],
])
console.log(question);
// console.log(question.set('JavaScript'))
// Quizz app/
const getQuestion = question.get('question')
console.log(getQuestion);


for (const [key, value] of question) {
    if (typeof key === 'number')
        console.log(`Answer ${key}:${value}`)

    const answer = Number(prompt('Your answer?'))
    console.log(question.get(question.get('Correct') === answer));*/
// if (answer === 3) {
// console.log(alert(question.get(true)));








// const question1 = {
//     question: 'What is the best programing language?',
//     1: 'C',
//     2: 'Java',
//     3: 'JavaScript',
//     Correct: 3,
//     true: 'Correct',
//     false: 'Try again!',
// }
// console.log(Object.entries(question1))
// const question2 = new Map(Object.entries(question1))





// rest
//     .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//     .set('open', 11)
//     .set('close', 23)
//     .set(true, 'We are open :D')
//     .set(false, 'We are closed :(')

// console.log(rest.get('name'))
// console.log(rest.get(2))


// const time = 5;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')))



// const shop = new Map()
// shop
//     .set('open', 12)
//     .set('close', 21)
//     .set(true, 'open')
//     .set(false, 'close')
// console.log(shop.get('open'));

// const clock = 18;
// console.log(shop.get(clock > shop.get('open') && clock < shop.get('close')))


// console.log(shop.has(''))
// const array = [1, 2]
// console.log(rest.set([1, 2], 'Test'))






// const question = new Map([
//     ['question', 'What is best programing language?'],
//     ['1', 'c'],
//     ['2', 'Phyton'],
//     ['3', 'Javascript'],
//     ['correct', 4],
//     [true, 3],
//     [false, 'try again']

// ])
// console.log(question.get('question'))

// for (const [key, value] of question) {
//     if (typeof key === 'number')

//         console.log((`Answer ${key} : ${value}`))
// }
// const answer = 3;
// // const answer = Number(prompt('your answer'))
// console.log(answer)
// console.log(question.get(question.get('correct') === answer))
// console.log(question)
// const coffe = {
//     name: 'Classico Italiano',
//     location: 'Via Angelo Tavanti 23, Firenze, Italy',
//     categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//     starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//     mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//     openingHours: {
//         thu: {
//             open: 12,
//             close: 22,
//         },
//         fri: {
//             open: 11,
//             close: 23,
//         },
//         sat: {
//             open: 0,
//             close: 24,
//         },
//     },
//     orderPasta: function(ing1, ing2, ing3) {
//         console.log(`here is your pasta {ing1},{ing2},{ing3}`)
//     }
// }

// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours))
// console.log(hoursMap)

const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
]);


// 3. Print the following string to the console: "An event happened, on average, every 9 minutes"(keep in mind that a game has 90 minutes)
// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF]17: ⚽️ GOAL
// 1. Create an array 'events' of the different game events that happened(no duplicates)
const events = new Map(gameEvents);
console.log(events);
// gameEvents.delete(92)
// gameEvents.set(64, 'kaunas')


// 3. Print the following string to the console: "An event happened, on average, every 9 minutes"(keep in mind that a game has 90 minutes)
const event1 = gameEvents.set(47, 'kaunas');
console.log(event1);
const time = [...gameEvents.keys()].pop();
console.log(`"An event happened, on average, every ${time / gameEvents.size} minutes"`)

console.log(time);



// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
for (const [min, event] of gameEvents) {
    // const half = min <= 45 ? 'First' : 'Second';
    // console.log(`${half} Half = ${min}: ${event}`)
    const half = min;
    if (half <= 45) {
        console.log(`First half ${min} ${event}`);

    } else {
        console.log(`Second half ${min} ${event}`)
    }

}
// const times = [...gameEvents.keys()].pop;
// console.log(times)
// console.log(`An event happened, on average, every ${time / gameEvents.size} minutes`)

// for (const [min, event] of gameEvents) {
//     const half = min <= 45 ? 'Firs' : 'Second'
//     console.log(`[${half} Half] ${min}: ${event}`)
// }
const airline = 'TAP Air Portugal'
const plane = 'A320';

console.log(plane[0])

console.log('B737' [0]);

console.log(airline.length);
console.log('B737'.length);

// Methods
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));

console.log(airline.indexOf('Portugal'))

console.log(airline.slice(4));
console.log(airline.slice(4, 7))

console.log(airline.slice(0, airline.indexOf(' ')))
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2))
console.log(airline.slice(1, -1))
console.log(airline.slice(-2))






const checkMiddleSeat = function(seat) {
    // B and E are middle seats
    const s = seat.slice(-1)
    console.log(s)
    if (s === 'B' || s === 'C') {
        console.log('You got middle seat');

    } else {
        console.log('You lucky')
    }


}

checkMiddleSeat('11B');
checkMiddleSeat('23C')
checkMiddleSeat('3E')


const checkSeats = function(seat) {
    const s = seat.slice(-1)
    if (s === 'B' || s === 'D') {
        console.log('You lucky beside window seat');

    } else {
        console.log('You seat is in middle');

    }

}
checkSeats('11B')
checkSeats('11A')
checkSeats('11C')
checkSeats('11D')

const airlines = 'TAP Air Portugal'
console.log(airlines.toLowerCase());
console.log(airlines.toUpperCase());

const passenger = 'JoNas'
console.log(passenger.toLowerCase());
const passengerLowerCase = passenger.toLowerCase();
console.log(passengerLowerCase);

const passengerCorrect = passengerLowerCase[0].toLocaleUpperCase() + passengerLowerCase.slice(1)
console.log(passengerCorrect);

const passenger1 = 'TOmAs'
const correctPassenger1 = passenger1[0].toUpperCase() + passenger1.slice(1).toLowerCase();
console.log(correctPassenger1);

const email = 'hellotomas@gmail.com';
const loginEmail = '  HelloTomas@gmail.com  '
    // const lowerCase = loginEmail.toLowerCase()
    // const trimmedEmail = lowerCase.trim()
    // console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim()
console.log(normalizedEmail)

console.log(email === normalizedEmail);
// console.log(realEmail)

// replacing

const priceGB = '288,97£';

const priceUS = priceGB.replace('£', '$').replace('288', 'u')
console.log(priceUS)

const announcement = 'All passengers come to boarding door 23.Boarding door 23!'

const announcementReplace = announcement.replaceAll('door', 'gates')
console.log(announcementReplace);

// Booleans

const planes = 'airA320neo';
console.log(planes.includes('A320neo'));
console.log(planes.includes('boeing'));
console.log(planes.startsWith('air'))

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
    console.log('part of the New AIRBUS family')
}
// practice exercise

const checkBaggage = function(item) {
    const baggage = item.toLowerCase();
    if (baggage.includes('gun') || baggage.includes('knife')) {
        console.log('You not alowed for boarding');

    } else {
        console.log('All good :)')
    }

}
checkBaggage('I have some snacks');
checkBaggage('I have Gun to protect myself,Knife in my pocket too')
checkBaggage('I Have fly rod')

// SPLIT and join

console.log('a+very+nice+string'.split('+'))

const [firstName, lastName] = 'Tomas Surininas'.split(' ')

const myName = ['Mr,', firstName, lastName.toUpperCase()].join(' ')
console.log(myName)







const capitalizeName = function(name) {
        const names = name.split(' ')
            // akk 
            // console.log(names)
        const namesUpper = [];
        // console.log(namesUpper)
        for (const vardai of names) {
            // push makes first letter uppercase and add all names except first letter
            // after that makes new variable namesUpper[] and push()all sentence
            namesUpper.push(vardai[0].toUpperCase() + vardai.slice(1))
        }
        console.log(namesUpper.join(' '))

    }
    // need to make first letter uppercase
capitalizeName('Jessica ann smith davis')
capitalizeName('tomas surininas')


const capitalizeName1 = (name) => {
        const names = name.split(' ');
        const nameCorrect = [];
        for (const n of names) {
            nameCorrect.push(n[0].toUpperCase() + n.slice(1));

        }
        console.log(nameCorrect.join(' '));

    }
    // split convert to Array
    // join convert from array to string




capitalizeName1('tomas surininas')
capitalizeName1('tomas surininas misteris')

const capitalizeName2 = (namess) => {
    const names = namess.split(' ')
    console.log(names)
    const correctName = []

    for (const n of names) {
        correctName.push(n[0].toUpperCase() + n.slice(1));
        console.log(correctName)
        const join = correctName.join(' ')
        console.log(join)
    }
    // split convert to Array
    // join convert from array to string


}

capitalizeName2('tomas surininas')
capitalizeName2('tomas surininas misteris')

const vardai = (parametras) => {
    const names1 = parametras.split(' ');
    const tikrasVardas = []
    for (const i of names1) {
        // tikrasVardas.push(i[0].topperCase() + i.slice(1));
        tikrasVardas.push(i.replace(i[0], i[0].toUpperCase()))

        console.log(tikrasVardas)
    }

}
vardai('tomas matas')

const message = 'Go to gate 23!';
console.log(message.padStart(24, '+').padEnd(30, '+'));
console.log(message.padStart(24, ));
console.log(message.padEnd(10, 'labas'))

const maskCreditCard = function(number) {
    const str = number + ''; /* number make to string use + '' */
    const last = str.slice(-4) /* cut of last 4 digits */
    return last.padStart(str.length, '#') /* return instead number '# ' .length */
}
maskCreditCard(5574345434457457755757);
console.log(maskCreditCard('558435550005505500505005'));

const myCardNumber = function(cardNumber) {
    const str = cardNumber + '';
    const lastNumbersJust = str.slice(-5);
    return lastNumbersJust.padStart(str.length, '#')
}
console.log(myCardNumber(884884848848484))

// repeat//
const message2 = 'Bad weather... All Departures'

console.log(message2.repeat(5));




const planesInline = function(n) {
    console.log(`There are ${n} planes in line ${'✈'.repeat(n)} `);

}
planesInline(5)
planesInline(3)
planesInline(12)

const flightCancel = (cancel) => {
    console.log(`flights cancel ${cancel} times yesterday was very bad${'😥'.repeat(cancel)}`)
}
flightCancel(5)
flightCancel(10)
flightCancel(9)

document.body.append(document.createElement('textarea'))

document.body.append(document.createElement('button'));


document.querySelector('button').addEventListener('click', function() {


    const text = document.querySelector('textarea').value;
    const rows = text.split('\n');
    console.log(rows)

    for (const [i, row] of rows.entries()) {
        const [first, second] = row.toLowerCase().trim().split('_');
        const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`
        console.log(`${output.padEnd(40)}${'✅'.repeat(i + 1)}`);
    }
})

// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure

// const btn = document.querySelector('.btn');

// btn.addEventListener('click', function() {
//     const text = document.querySelector('.textarea').value

//     const rows = text.split('\n')

//     for (const row of rows) {
//         const [first, second] = row.toUpperCase().trim().split('_')

//         const output = `${first},${second.replace(second[0], second[0].toLowerCase())}`
//         console.log(output)


//     }


const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

console.log(flights.split('+'))