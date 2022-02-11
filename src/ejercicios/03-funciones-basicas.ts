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

const resultado = multiplicar(10, 10);
const mul2 = multiplicar(1,2,5)


console.log(resultado, mul2);