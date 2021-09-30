
interface Pasajero {
    nombre: string;

    //El ? aqui significa que este valor puede ser opcional
    hijos?: string[];
}

const pasajero1: Pasajero = {
    nombre: 'Fernando'
}

const pasajero2: Pasajero = {
    nombre: 'Melisa',
    hijos: ['Natalia','Gabriel']

}

function imprimeHijos( pasajero: Pasajero): void {

    //En este caso si no ponemos interrogante dará un error al ejecutarse
    //porque pasajero1 tiene como hijos undefined y no se puede calcular la longitud de eso
    //en estos casos ponemos ? para decirle que si es posible devuelva la longilud del array hijos
    //si ponemos || 0, estamos indicando que si no puede entonces devuelva 0
    const cuantosHijos = pasajero.hijos?.length || 0;
    console.log(cuantosHijos);
}

imprimeHijos( pasajero1);