import { doces } from "./data.js";

export function renderCardapio() {
  const container = document.getElementById("cardapio");
  container.innerHTML = "";

  const categorias = {};

  doces.forEach(doce => {
    if (!categorias[doce.categoria]) {
      categorias[doce.categoria] = [];
    }
    categorias[doce.categoria].push(doce);
  });

  Object.keys(categorias).forEach(cat => {
    const secao = document.createElement("section");
    secao.classList.add("categoria");

    secao.innerHTML = `
      <h2 class="titulo-categoria">${formatarCategoria(cat)}</h2>
    `;

    categorias[cat].forEach(doce => {
      const card = document.createElement("div");
      card.classList.add("doce-card");

      card.innerHTML = `
        <h4>${doce.nome}</h4>
        <p class="descricao">${doce.descricao}</p>
        <ul>
          ${doce.pesos
          .map(p => `<li>${p.peso} — R$ ${p.preco.toFixed(2)}</li>`)
          .join("")}
        </ul>
      `;

      secao.appendChild(card);
    });

    container.appendChild(secao);
  });
}

function formatarCategoria(cat) {
  if (cat === "ovos-colher") return "OVOS DE COLHER";
  if (cat === "kit-mini-ovos") return "KIT MINI OVOS";
  return cat.toUpperCase();
}