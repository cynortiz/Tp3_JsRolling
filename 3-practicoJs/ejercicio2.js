
const ciudades = [];
let ciudad;

while ((ciudad = prompt("Ingrese el nombre de una ciudad (o presione cancelar para finalizar):")) !== null) {
    ciudades.push(ciudad);
}


console.log("Arreglo de ciudades:", ciudades);


console.log("Longitud del arreglo:", ciudades.length);


document.write(`<p>Primera ciudad: ${ciudades[0]}</p>`);
document.write(`<p>Tercera ciudad: ${ciudades[2]}</p>`);
document.write(`<p>Última ciudad: ${ciudades[ciudades.length - 1]}</p>`);


ciudades.push("París");


document.write(`<p>Elemento en la segunda posición: ${ciudades[1]}</p>`);


ciudades[1] = "Barcelona";

console.log("Arreglo actualizado:", ciudades);
