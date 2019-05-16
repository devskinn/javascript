// Method = object property whose value is a function as per checkAvailability below
// this - is a way to access object properties within an object method

// challenge - create two methods to seat and remove a party
let restaurant = {
    name: 'Damons',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function (partySize) {
        this.guestCount = this.guestCount + partySize
    },
    removeParty: function (partySize) {
        this.guestCount = this.guestCount - partySize
    }
}

restaurant.seatParty(5)
restaurant.removeParty(2)
console.log(restaurant.guestCount)
console.log(restaurant.checkAvailability(8))
