let continente = 1000000000;
let pais = 52000000;
let departamento = 20000000;
let ciudad = 581130;
let barrio = 2000;
let direccion = 5;

console.log(continente);
console.log(pais);
console.log(departamento);
console.log(ciudad);
console.log(barrio);
console.log(direccion);

document.write(`<h3>Habitantes en el continente: </h3>${continente}`)
document.write(`<h3>Habitantes en el país: </h3>${pais}`)
document.write(`<h3>Habitantes en el departamento: </h3>${departamento}`)
document.write(`<h3>Habitantes en la cuidad: </h3>${ciudad}`)
document.write(`<h3>Habitantes en el barrio: </h3>${barrio}`)
document.write(`<h3>Habitantes en mi dirección: </h3>${direccion}`)

const esTercerMundista = true;
const idioma = 'Español';
console.log(esTercerMundista, continente, pais, idioma);


let mitad = pais/2;
console.log(mitad);

let aumentarPais = pais+1000000;
console.log(aumentarPais);

let finlandia = 6000000;
if (pais > finlandia){
    console.log('Mi pais tiene mas gente que Finlandia');
}else {
    console.log('Mi país no tiene mas gente que Finlandia');
}

let promedioPaises = 33000000;
if (pais < promedioPaises){
    console.log('Mi país tiene menos gente que el promedio');
}else {
    console.log('Mi país tiene más gente que el promedio');
}

let descripcion = `Colombia está en América, y Bucaramanga que está en el departamento de Santader tiene un barrio llamado El Tejar y sus ${barrio} personas hablan ${idioma}`
console.log(descripcion);


let name = 'pablo';
let fruit = 'banana';
let animal = 'dog';
let thing = 'ball';
let color = 'orange';
let televison = 'samsung';
let phone = 'iphone';
let relative = 'my sister is beautiful';
let day = 'Saturday';
let month = 'May';

console.log(name.length);
console.log(fruit.includes('apple'));
console.log(`My favorite animal is ${animal}`);
console.log(thing.trimStart());
console.log(color.trimEnd());
console.log(televison.replace('LG' , 'Challenger'));
console.log(phone.slice(1,4));
console.log(relative.split(' '));
console.log(day.toUpperCase());
console.log(month.toLowerCase());