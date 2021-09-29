
export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Nokia A1',
    precio: 150
}

const tableta: Producto = {
    desc: 'iPad Air',
    precio: 350
}
/*
function mostrarProducto(producto: Producto, i:number, productos: Producto[]){
    console.log('La descripción del producto es:', producto.desc);
    console.log( 'Su índice:', i);
    console.log('El array que está siendo evaluado:', productos);
}
*/
/*const productos: Producto[] = [telefono, tableta];

calcularISV(productos);
function calcularISV( productos: Producto[]){

    productos.forEach(mostrarProducto);
}

calcularISV(productos);
*/

export function calcularISV( productos: Producto[]){

    let total = 0;
    let description: string;
    /*
    productos.forEach((producto) => {
        total += producto.precio;
    })*/
    //para desestructural los argumentos basta con poner los {}

    productos.forEach(({precio, desc}) => {
        total += precio;
        description = desc;
    })
    return [total, total*0.15, description];

}


const productos: Producto[] = [telefono, tableta];

//también podemos desestructurar el array del return de calcularISV
const [total, ISV, desc] = calcularISV(productos);
console.log('Total del producto',desc, ':', total, '\n', 'ISV:', ISV);