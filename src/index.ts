/*
    ===== Código de TypeScript =====
*/

interface Pasajero {
    nombre:string;
    hijos?:string[];
}

const pasajero1:Pasajero = {
    nombre: 'Harold'
}

const pasajero2:Pasajero = {
    nombre: 'Melisa',
    hijos: ['Mateo', 'Luis']
}

function imprimeHijos(pasajero:Pasajero):void{
   
    const numHijos = pasajero.hijos.length;
    
    console.log(numHijos);
}

imprimeHijos(pasajero2);