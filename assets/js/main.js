import { doces } from "./data/doces.js";
import { criarCard } from "./components/card.js";

const container = document.getElementById("lista-doces");

function renderizar() {
    container.innerHTML = "";

    doces.forEach(doce => {
        container.innerHTML += criarCard(doce);
    });
}

document.addEventListener("DOMContentLoaded", renderizar);