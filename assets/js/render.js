import { doces } from "./data.js";

export function renderCardapio() {
  const container = document.getElementById("cardapio");
  container.innerHTML = "";

  // Agrupar por categoria
  const categorias = {};

  doces.forEach((doce) => {
    if (!categorias[doce.categoria]) {
      categorias[doce.categoria] = [];
    }
    categorias[doce.categoria].push(doce);
  });

  // Criar seção para cada categoria
  Object.keys(categorias).forEach((categoria) => {
    const secao = document.createElement("section");
    secao.classList.add("mb-5");

    // Título da categoria
    const titulo = document.createElement("h2");
    titulo.classList.add("titulo-categoria");
    titulo.textContent = formatarCategoria(categoria);

    secao.appendChild(titulo);

    // Criar grid Bootstrap
    const row = document.createElement("div");
    row.classList.add("row", "g-4");

    // Criar cards
    categorias[categoria].forEach((doce) => {
      const col = document.createElement("div");
      col.classList.add("col-12", "col-md-6");

      const card = document.createElement("div");
      card.classList.add("doce-card", "h-100");

      card.innerHTML = `
        <h4>${doce.nome}</h4>
        <p class="descricao">${doce.descricao}</p>
        <ul>
          ${doce.pesos
          .map(
            (p) =>
              `<li class="d-flex justify-content-between">
                   <span>${p.peso}</span>
                   <strong>R$ ${p.preco.toFixed(2)}</strong>
                 </li>`
          )
          .join("")}
        </ul>
      `;

      col.appendChild(card);
      row.appendChild(col);
    });

    secao.appendChild(row);
    container.appendChild(secao);
  });
}

// Formatar nome da categoria
function formatarCategoria(categoria) {
  if (categoria === "ovos-colher") return "OVOS DE COLHER";
  if (categoria === "kit-mini-ovos") return "KIT MINI OVOS";
  return categoria.toUpperCase();
}