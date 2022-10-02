// const rest1 = {
//     name: 'Capri',
//     numGuests: 20,
// }


// const game = {
//     team1: 'Bayern Munich',
//     team2: 'Borrussia Dortmund',
//     players: [
//         [
//             'Neuer',
//             'Pavard',
//             'Martinez',
//             'Alaba',
//             'Davies',
//             'Kimmich',
//             'Goretzka',
//             'Coman',
//             'Muller',
//             'Gnarby',
//             'Lewandowski',
//         ],
//         [
//             'Burki',
//             'Schulz',
//             'Hummels',
//             'Akanji',
//             'Hakimi',
//             'Weigl',
//             'Witsel',
//             'Hazard',
//             'Brandt',
//             'Sancho',
//             'Gotze',
//         ],
//     ],
//     score: '4:0',
//     scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//     date: 'Nov 9th, 2037',
//     odds: {
//         team1: 1.33,
//         x: 3.25,
//         team2: 6.5,
//     },
// };
// // 1. Loop over the game.scored array and print each player name to the console, along with the goal number(Example: "Goal 1: Lewandowski")



// for (const [i, player] of game.scored.entries())
//     console.log(i, player);
// // 2. Use a loop to calculate the average odd and log it to the console(We already studied how to calculate averages, you can go check if you don't remember)


// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odd;
// average /= odds.length;
// console.log(average);

// // 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
// for (const [team, odd] of Object.entries(game.odds)) {
//     const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//     console.log(`Odd of ${teamStr} ${odd}`);
//
let blocks = new Map()
blocks.set(1, 'red')
blocks.set(2, 'green')
blocks.set(3, 'yellow')
blocks.set(4, 'blue')

console.log(blocks)