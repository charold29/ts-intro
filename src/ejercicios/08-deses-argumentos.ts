/*
    ===== Código de TypeScript =====
*/

export interface Producto {
    desc:string;
    precio:number;
}

const telefono:Producto = {
    desc: 'Iphone X',
    precio: 3000
}

const tablet:Producto = {
    desc: 'Ipad Air',
    precio: 2500
}

// 1era forma
// function calculaISV(productos:Producto[]):number {

//     let total = 0;

//     productos.forEach( ({precio}) => {
//        total += precio;
//     });

//     return total * 0.10;

// }

// 2da forma
export function calcularISV(products: Producto[]): number[] {
    const total = products.reduce( (acumulator, next) => acumulator += next.precio, 0);
    return [total, total * 0.10];
}

// 3era forma
const calcularISVArrow = (prods:Producto[]):number => {
    
    let total = 0;
    
    prods.forEach((element) => {
        total += element.precio;
    });

    // prods.forEach(({precio}) => {
    //     total += precio;
    // });

    return total*0.10;
}

const articulos = [telefono,tablet];

// 1era forma
// const isv = calcularISV(articulos);

// 2da forma
const [,isv]= calcularISV(articulos);
// console.log('isv :', isv);

// 3era forma
// console.log('isvArrow :', calcularISVArrow(articulos));