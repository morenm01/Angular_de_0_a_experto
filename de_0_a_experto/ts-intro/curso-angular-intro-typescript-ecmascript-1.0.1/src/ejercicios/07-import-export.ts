
import {calcularISV, Producto} from './06-desestructuracion-argumentos';
//import {calcularISV, Producto} from './ejercicios/06-desestructuracion-argumentos';
//Para poder importar previamente se debe exportar en el fichero existente el elemento
//al importar el archivo lo crea y lo ejecuta por eso si no comentamos el console.log de 06-desestructuracion-argumentos también sale el resultado
//al indicar el fichero del que importar no es necesario indicar .ts
const carritoCompras: Producto[] =[
    { 
        desc: 'Telefono 1',
        precio: 100
    },
    {
        desc: 'Telefono 2',
        precio: 150
    }
];

const [total_, ISV_, ] = calcularISV( carritoCompras);

console.log('Total_', total_);
console.log('ISV', ISV_);