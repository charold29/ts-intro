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

    // if( pasajero.hijos == undefined){
    //     let numHijos = 0;
    //     console.log('Nro Total de hijos:', numHijos);
    // }

    const numHijos = pasajero.hijos?.length || 0;
    console.log(numHijos);

}

imprimeHijos(pasajero1);