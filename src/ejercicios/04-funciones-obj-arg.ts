/*
    ===== Código de TypeScript =====
*/

interface PersonajeEspecial{
    nombre:string;
    hp:number;
    //mostrarHp():void;
    mostrarHp:() => void;
}
 
function curar(personaje:PersonajeEspecial, curaX:number):object{

    personaje.hp += curaX;

    return personaje;

}

let personaje1: PersonajeEspecial = {
    nombre: "Harold",
    hp:300,
    mostrarHp() {
        console.log('Puntos de vida: ', this.hp);
    }
}

console.log("Personaje 1: ", personaje1);

console.log("Personaje 1 curado: ", curar(personaje1, 500));

personaje1.mostrarHp();