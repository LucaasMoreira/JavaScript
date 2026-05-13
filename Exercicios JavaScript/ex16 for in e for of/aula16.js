let num = [10, 20, 30, 40,]

for(n in num){
    console.log('quantos' + ' ' + n)
}

for(n in num)
    console.log('quantos' + ' ' + num[n])


for(n of num)
    console.log('agora so nome' + ' ' + n)

