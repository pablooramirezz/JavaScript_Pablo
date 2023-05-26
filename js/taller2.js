////1----------------------------------------------------------//
//let nota1 = Number(prompt('Primera nota del estudiante:'));
//let nota2 = Number(prompt('Segunda nota del estudiante:'));
//let nota3 = Number(prompt('Tercera nota del estudiante:'));
//
//function mensaje(){
//    let promedio = (nota1 + nota2 + nota3) / 3;
//    console.log(promedio);
//
//    if (promedio <= 3.9) {
//        console.log('Estudie mijo.')
//    }else if (promedio >3.9) {
//        console.log('BECADO!!')
//    }
//}
//mensaje();
//
//    
////2----------------------------------------------------------//
//let numero = Number(prompt('Ingrese un número entero:'));
//if (numero%2 == 0 && numero >9) {
//    console.log('Este número es par y mayor que 10.');
//}else if (numero%2 == 0 && numero <10){
//    console.log('Este número es par y menor que 10.');
//}else if (numero%2 !== 0 && numero >9) {
//    console.log('Este  número es impar y mayor a 10.');
//}else {
//    console.log('Este numero es impar y menor a 10.');
//}
//
////3----------------------------------------------------------//
//let resistencia = Number(prompt('Resistencia del circuito:'));
//let intensidad = Number(prompt('Intensidad del circuito:'));
//let voltaje = resistencia * intensidad;
//console.log(`${voltaje}V`);

////4----------------------------------------------------------//
//let edadMax = 0;
//let nomEdadMax = '';
//
//for(let i = 0; i < 3; i++) {
//    nombre = prompt('Nombre de la persona:');
//    edad = Number(prompt('Edad de la persona:'));
//
//    if(edad > edadMax) {
//        edadMax = edad;
//        nomEdadMax = nombre;
//    }else {
//        edadMax = edadMax;
//        nomEdadMax = nomEdadMax;
//    }
//        
//}
//
//
//console.log(`La persona de mayor edad es ${nomEdadMax} con ${edadMax} años.`);

//5----------------------------------------------------------//
let num1 = Number(prompt('Ingrese un numero:'));
let num2 = Number(prompt('Ingrese otro número:'));

function resultado(num1,num2) {
    let suma = num1 + num2;
    let resta = num1 - num2;
    let mul = num1 * num2;
    let div = num1 / num2;
    if(num1 > num2) {
        console.log(`La suma de los dos números es ${suma}.`);
        console.log(`La diferencia de los dos números es ${resta}.`);
    }else if(num1 < num2) {
        console.log(`El producto de los dos números es ${mul}.`);
        console.log(`La división de los dos números es ${div}.`);
    }
}

resultado(num1,num2);

//6----------------------------------------------------------//
