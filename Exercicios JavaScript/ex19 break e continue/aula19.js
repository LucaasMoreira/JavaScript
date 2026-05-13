let par = 0
let m = 0
let n = 1000

for(let i = m; i<n; i++) {
    if(i%2 === 0){
       continue
    }
    par++
}

console.log('pares' + par)