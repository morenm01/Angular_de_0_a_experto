
interface Reproductor{
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }

}
/*
console.log('El volumen actual de:', reproductor.volumen);
console.log('El segundo actual de:', reproductor.segundo);
console.log('La cancion actual de:', reproductor.cancion);
console.log('El autor es:', reproductor.detalles.autor);
*/

//La destructuración es extraer directamente las propiedades de un objeto y crear variables para no andar poniendo reproductor.

/*esta forma es mas liosa porque se puede confundir con el tipado, pero es válida

const {volumen, segundo, cancion, detalles: {autor}} = reproductor;*/

/*esta forma es mas limpia, además cambiamos el nombre de volumen*/
const { volumen: vol, segundo, cancion, detalles } = reproductor;
const { autor } = detalles;

console.log('El volumen actual de:', vol);
console.log('El segundo actual de:', segundo);
console.log('La cancion actual de:', cancion);
console.log('El autor es:', autor);

/*desestructuración de arreglos*/

// En la destructuración de objetos da igual el orden porque las variables se crean según el nombre
// pero en los arreglos van por posición, por lo que si solo queremos alguna variable del arreglo tendremos que dejar definidas las posiciones anteriores para que lo entienda


const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

const [ , p2, p3] = dbz;

console.log('Personaje 1', dbz[0]);
console.log('Personaje 2', p2);
console.log('Personaje 3', p3);