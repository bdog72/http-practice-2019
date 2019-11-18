console.log(123);

const div = document.createElement("div");
const h1 = document.createElement("h1");

h1.classList.add("bozo");
h1.innerHTML = `<h1>Bozo</h1>`;

div.style.background = "blue";

document.body.append(div);
div.append(h1);
