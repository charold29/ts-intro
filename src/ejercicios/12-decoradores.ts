/*
    ===== Código de TypeScript =====
*/

function reportableClassDecorator<T extends { new (...args: any[]): {} }>(
    constructor: T
) {
    return class extends constructor {
      reportingURL = "http://www...";
    };
  }

@reportableClassDecorator
class MiSuperClase {

    constructor(
        public miPropiedad:string = 'ABC123'
    ){}

    imprimir() {
        console.log('Hola mundo');
    }
}

console.log(MiSuperClase);

const x = new MiSuperClase();
console.log(x.miPropiedad);

/* Funciona solo en el navegador
console.log(x.reportingURL); 
*/ 