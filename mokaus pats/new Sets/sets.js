// const orderSet = new Set([
//     'Pasta',
//     'Pizza',
//     'Pizza',
//     'Pasta',
//     'Pizza',
//     'Rissoto',
//     'Eggs'
// ])
// console.log(orderSet); /*Set(4){'past','Pizza','Rissoto','Eggs'}*/
// console.log(orderSet.size); /*4*/

// console.log(orderSet.has('Pizza'));
// console.log(orderSet.has('bread')); /*has is method*/

// orderSet.add('Garlic bread')
// orderSet.add('Garlic bread') /*add 1 set becouse double*/
// console.log(orderSet)
// orderSet.delete('Rissoto')
//     // orderSet.clear()   /*delete all*/
// console.log(orderSet)

// for (const order of orderSet) console.log(order)


// orderSet.forEach(function(order) {
//     console.log(order);

// });
// orderSet.forEach(order => {
//     console.log(order);

// });

// Example

// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// // const staffUnique = new Set(staff)
// const staffUnique = [...new Set(staff)]
//     // spread operator make all rest to arrow ['waiter','chef','manager']
// console.log(staffUnique);
// console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'])).size


// const orderSet = new Set(['Pasta', 'Eggs', 'Rissoto', 'Pasta', 'Eggs'])
// console.log(orderSet)
//     // console.log(new Set('jonas'))

// console.log(orderSet.size);
// console.log(orderSet.has('Eggs'))
// console.log(orderSet.add('Potato'))

// orderSet.delete('Pasta')
// console.log(orderSet)

// for (const order of orderSet)
//     console.log(order)
// orderSet.forEach(order => {
//     console.log(order)
// });

// const staff = [
//     'Waiter',
//     'Chef',
//     'manager',
//     'Waiter',
//     'Chef'
// ]

// const staffRestaurant = [...new Set(staff)]


// console.log(staffRestaurant)
// console.log(new Set(['Waiter',
//     'Chef',
//     'manager',
//     'Waiter',
//     'Chef'
// ]).size)
// console.log(new Set('Tomastomas').size)

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
const events = new Set(gameEvents);
console.log(events);

const orderSet = new Set(['past', 'past', 'rissoto', 'eggs', 'rissoto'])
const order = orderSet;
console.log(new Set('Jonas'));

// how work with sets

console.log(orderSet.size);
const haso = orderSet.has('eggs'); /* has PATIKRINA AR ARRAY TURI KO KLAUSI */
console.log(haso);

orderSet.add('garlic Bread') /*PRIDEDA PRIE ARRAY SET AISKU 2 TIE PATYS NESIDUBLIUOS */
orderSet.add('garlic ')
console.log(orderSet);

orderSet.delete('eggs')
console.log(orderSet);

for (const order of orderSet)
    console.log(order)

const restaurantStaff = [...new Set([ /*spread operator ...new makes to array */
    'waitres',
    'chef',
    'manager',
    'waitres'
])]


console.log(restaurantStaff);

const staff = new Set([
    'waitres',
    'chef',
    'manager',
    'waitres'
]).size
console.log(staff);

console.log(new Set('sldkfjgjrp').size) /*count hoe many letters total */