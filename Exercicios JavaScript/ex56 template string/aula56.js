let carros = new Set(['mazda furai', 'toyota', 'rimac', 'nissan'])

let ol = `<ol>`
carros.forEach((el)=>{
    ol+=`<li> ${el} </li>`
})

ol += `</ol>`

console.log(ol)


//um exemplo medio do uso de tempalte string
//tanto que usando ${} nos pode colocar variaveis, constantes elementos e etc
