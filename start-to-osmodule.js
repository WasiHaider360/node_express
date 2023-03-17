// const amount = 12
// if(amount < 10){
//     console.log("This True")
// }
// console.log("Its my first node program ")

// console.log(__dirname)
// setInterval(() => {
//     console.log('hello world')
// }, 1000);


// Module Lecture

// const names = require('./names')
// const sayHi = require('./utiles')
// const data = require('./6-alternativeflavours')
// require('./7-mindgraned')
// console.log(data.singleperson)
// console.log(sayHi)
// sayHi(names.john)
// sayHi(names.petter)
// sayHi('Josh')

// Os Module
const os = require('os')
const user = os.userInfo()
console.log(user)
//methods that return the system uptime in secods
console.log(`The systme uptime is : ${os.uptime/3600} seconds`)
const currentos ={
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem()
}
console.log(currentos)

