/*
    ===== Código de TypeScript =====
*/

function sumar(a:number, b:number):number{
    return a + b;
}

const sumarFlecha = (a:number, b:number):number =>{
    return a + b;
}

function multiplicar(numero:number, base:number, otroNumero?:number){
    if(otroNumero == undefined){
        return numero * base;
    }else{
        return numero * base * otroNumero;
    }
     
}

const multiplicacion = multiplicar(10, 10);
const mult = multiplicar(1,2,5)


console.log(multiplicacion, mult);