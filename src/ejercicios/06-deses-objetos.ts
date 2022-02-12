/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen:number;
    segundo:number;
    cancion:string;
    detalles:Detalles;
}

interface Detalles {
    autor:string;
    anio:number;
}

const reproductor:Reproductor = {
    volumen: 90,
    segundo: 40,
    cancion: 'Rompe',
    detalles: {
        autor: 'Daddy Yankee',
        anio: 2010
    }
}

const autor = "Fulano";

// 1era forma
const {volumen, segundo, cancion, detalles} = reproductor;
const {autor:autorDetalle} = detalles;

// 2da forma
// const {volumen, segundo, cancion, detalles:{autor:autorDetalle}} = reproductor;


console.log('El volumen actual de:', volumen);
console.log('El segundo actual de:', segundo);
console.log('El canción actual de:', cancion);
console.log('El autor es:', autorDetalle);