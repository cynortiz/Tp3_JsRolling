
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];


const ul = document.createElement("ul");

for (let i = 0; i < meses.length; i++) {
    const li = document.createElement("li");
    li.textContent = meses[i];
    ul.appendChild(li);
}

document.body.appendChild(ul);

