function sumaDivisores(numero) {
    suma=0;
    for(let i = 0; i <= (numero/2); i++) {
        if(numero%i ===0) {
            suma+=i
        }
    }
    return suma
}

let numero = Number(prompt('Ingrese un número:'));
console.log(sumaDivisores(numero));