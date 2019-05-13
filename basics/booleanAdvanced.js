let isAccountLocked = true
let userRole = 'admin'

if (isAccountLocked) {
    console.log('Account Locked')
} else if (userRole === 'admin') {
    console.log('Welcome Admin')
} else {
    console.log('Welcome')
}

// structure
// if () {
// } else if () {
// } else {
// }

let temp = 45
if (temp <= 31) {
    console.log('its freezing outside')
} else if (temp >= 80) {
    console.log('its way to hot')
} else {
    console.log('go for it')
}
