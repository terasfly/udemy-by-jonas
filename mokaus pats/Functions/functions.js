'use strict'


const bookings = [];

const createBooking = function(flightNum, numPassenger, price = numPassenger * 400) {



    const booking = {
        flightNum,
        numPassenger,
        price
    }
    console.log(booking)
    bookings.push(booking)
}
createBooking('LH123');
createBooking('ryr', 3)