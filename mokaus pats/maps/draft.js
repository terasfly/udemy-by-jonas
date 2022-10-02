/*const btn = document.querySelector('.btn')

btn.addEventListener('click', function() {
    const text = document.querySelector('.textarea').value;
    const rows = text.split('\n')


    for (const [i, row] of rows.entries()) {
        // console.log(rows)

        const [first, second] = row.toLowerCase().trim().split('_');
        // console.log(first, second)
        const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`
        console.log(`${output.padEnd(40)}${'✅'.repeat(i + 1)}`);
    }



})
*/


// const btn = document.querySelector('.btn');
// const title = document.querySelector('.title');

// btn.addEventListener('click', function() {
//     const text = document.querySelector('.textarea').value;
//     const rows = text.split('\n')
//     console.log(rows);
//     for (const [i, row] of rows.entries()) {

//         const [first, second] = row.toLowerCase().trim().split(' ')

//         const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`
//         const textEnd = (`${output.padEnd(30)}${'✅'.repeat(i + 1)}`)
//         title.textContent = textEnd;
//         console.log(textEnd)


//     }



// })

// const fruits = ['banana', 'apple', 'sausage']
// const f = fruits.entries()
// console.log(f)

// for (const x of f) {
//     console.log(`${x} ${'\n'}`)
// }

// const flights =
//     '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival; bru0943384722; fao93766109; 11: 45 + _Delayed_Arrival; hel7439299980; fao93766109; 12: 05 + _Departure; fao93766109; lis2323639855; 12: 30';


// const getCode = str => str.slice(0, 3).toUpperCase()

// for (const flight of flights.split('+')) {
//     // console.log(flight)
//     const [type, from, to, time] = (flight.split(';'))
//     const output = `${type.startsWith('_Delayed') ? '🚩' : ''}
//     ${type.replaceAll('_', ' ')}${getCode(from)}${getCode(to)}(${time.replace(':', 'h')})`.padStart(30, '-');
//     console.log(output)
// }


// console.log(flights.split('+'))
// const flights =
//     '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // const getCode = str => str.slice(0, 3).toUpperCase()


// for (const flight of flights.split('+')) {
//     // console.log(flight)
//     const [type, from, to, time] = (flight.split(';'))
//     const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll('_', ' ')} ${from.slice(0, 3).toUpperCase()} ${to} (${time.replace(':', 'h')})`.padStart(40)
//     console.log(output)
// }
// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

// console.log(flights.split('+'));
// const getCode = str => str.slice(0, 3).toUpperCase();

// for (const flight of flights.split('+')) {
//     const [type, from, to, time] = flight.split(';');
//     const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
//         '_',
//         ' '
//     )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
//     console.log(output);
// }.textarea {

const btn1 = document.querySelector('.btn');

const title1 = document.querySelector('.title')

btn1.addEventListener('click', function() {
    const textarea1 = document.querySelector('textarea').value
    const arrow = textarea1.split(' ');
    console.log(arrow)
    for (const arrowLoop of arrow) {
        console.log(arrow)
        const [first, second] = arrowLoop.split('-');
        console.log(arrowLoop)
        title1.textContent = `${first.startsWith(10).replace(first[0], first[0].toUpperCase())}${second.replace(second[0], second[0].toUpperCase())}`
    }

})