import { doces } from "./data/doces.js";
import { criarCard } from "./components/card.js";

const container = document.getElementById("lista-doces");

function agruparPorCategoria(lista) {
    return lista.reduce((acc, doce) => {
        if (!acc[doce.categoria]) {
            acc[doce.categoria] = [];
        }
        acc[doce.categoria].push(doce);
        return acc;
    }, {});
}

function renderizar() {
    container.innerHTML = "";

    const categorias = agruparPorCategoria(doces);

    Object.keys(categorias).forEach(categoria => {
        container.innerHTML += `
      <div class="col-12 mt-4">
        <h2 class="categoria-titulo">${categoria}</h2>
      </div>
    `;

        categorias[categoria].forEach(doce => {
            container.innerHTML += criarCard(doce);
        });
    });
}

document.addEventListener("DOMContentLoaded", renderizar);