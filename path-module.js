//path module
const path = require('path')
// console.log(path.sep)
// const filepat = path.join('/content','subfolder','test.txt')
// console.log(filepat)
// const base = path.basename(filepat)
// console.log(base) 
const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)