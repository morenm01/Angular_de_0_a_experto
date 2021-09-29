//let habilidades : (boolean | string |number)[]= ["bash", "counter", "healing"];
//habilidades.push("1");

let habilidades : string[]= ["bash", "counter", "healing"];

interface Personaje{
 nombre: string;
 hp: number;
 habilidades : string[];
 puebloNatal?: string;

}

const personaje: Personaje = {
    nombre: 'Straider',
    hp : 100,
    habilidades : ["bash", "counter", "healing"]

}

personaje.puebloNatal = "La Palma del Condado";

console.table(personaje);