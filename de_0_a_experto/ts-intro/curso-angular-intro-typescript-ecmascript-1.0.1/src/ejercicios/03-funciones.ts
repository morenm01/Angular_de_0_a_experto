
function sumar (a: number,b: number): number {
    return a+b;
}

/*function sumar (a: number,b: number) {
    return (a+b).toString;
}*/

//const resultado = sumar('Fernando', 'Herrera');

const resultado = sumar(30, 20);

console.log(resultado);

const sumarFlecha = (a: number, b: number): number => {
return a + b;
}
//el orden de los argumentos es importante
//primero son los obligatorios
//después los opciones
//y por último los que tienen algún valor por defecto
function multiplicar (numero: number, otroNumero?:number, base = 2){
    return numero * base;
}

const resultado2 = multiplicar(30, 20);

/////funciones con objetos como argumentos
//void cuando no retorna nada, aunque en javascript  siempre devuelve algo, al menos undefined

interface PersonajeLOR {

    nombre: string;
    pv: number;
    mostrarHp: () => void;
}

function curar( personaje: PersonajeLOR, curarX: number ): void {

    personaje.pv += curarX;

    console.log( personaje);

    

}

const nuevoPersonaje: PersonajeLOR = {

    nombre: 'Strider',
    pv: 50,
    mostrarHp() {
        console.log( 'Puntos de vida:', this.pv);
    }
}

curar( nuevoPersonaje, 20);