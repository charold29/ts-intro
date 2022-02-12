/*
    ===== Código de TypeScript =====
*/

interface Producto {
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

// function calculaISV(productos:Producto[]):number {

//     let total = 0;

//     productos.forEach( ({precio}) => {
//        total += precio;
//     });

//     return total * 0.10;

// }
function calcularISV(products: Producto[]): number[] {
    const total = products.reduce( (acumulator, next) => acumulator += next.precio, 0);
    return [total, total * 0.10];
}

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

const [,isv]= calcularISV(articulos);
console.log('isv :', isv);
console.log('isvArrow :', calcularISVArrow(articulos));
