//Fs module
// IN File System module we have two options syncroniously and Asyncrounesly 
//This is Syncround I.e Blocking
const {readFileSync,writeFileSync}= require('fs')

const first= readFileSync('./content/first.txt','utf8')
const second= readFileSync('./content/second.txt','utf8')

writeFileSync('./content/result-sync.txt',`Checking : ${first}, ${second}`,{flag:'a'})