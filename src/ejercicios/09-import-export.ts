/*
    ===== Código de TypeScript =====
*/

// import { Producto, calcularISV } from "./ejercicios/08-deses-argumentos";
import { Producto, calcularISV } from "./08-deses-argumentos";

const carritoCompras:Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 200
    },
    {
        desc: 'Telefono 2',
        precio: 500
    }
];

const [total, isvCarrito] = calcularISV(carritoCompras);

console.log('total :', total);
console.log('isvCarrito :', isvCarrito);