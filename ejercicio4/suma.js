function suma(numero){
    let resultado = 0;
    let num = numero;
    for(let i = 1; i <= num ; i++) {
        resultado += i;
    }
    return resultado
}

console.log(suma(4));
console.log(suma(10));
console.log(suma(15));