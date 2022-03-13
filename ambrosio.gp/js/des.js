// création des 6 dés

const de1 = document.createElement("div");
de1.setAttribute("class", "d");
de1.classList.add("d1");
de1.innerText = "⚫";

const de2 = document.createElement("div");
de2.setAttribute("class", "d");
de2.classList.add("d2");
de2.innerText = "⚫ ⚫";

const de3 = document.createElement("div");
de3.setAttribute("class", "d");
de3.classList.add("d3");
de3.innerText = "⚫ ⚫ ⚫";

const de4 = document.createElement("div");
de4.setAttribute("class", "d");
de4.classList.add("d4");
de4.innerText = "⚫ ⚫ ⚫ ⚫";

const de5 = document.createElement("div");
de5.setAttribute("class", "d");
de5.classList.add("d5");
de5.innerText = "⚫ ⚫ ⚫ ⚫ ⚫";

const de6 = document.createElement("div");
de6.setAttribute("class", "d");
de6.classList.add("d6");
de6.innerText = "⚫ ⚫ ⚫ ⚫ ⚫ ⚫";



// le plateau
const plateau = document.querySelector("div.plateau");

plateau.appendChild(de1);
plateau.appendChild(de2);
plateau.appendChild(de3);
plateau.appendChild(de4);
plateau.appendChild(de5);
plateau.appendChild(de6);

