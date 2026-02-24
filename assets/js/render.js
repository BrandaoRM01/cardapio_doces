import { doces } from "./data.js";

export function renderCardapio() {
  const container = document.getElementById("cardapio");
  container.innerHTML = "";

  const menuBox = document.createElement("div");
  menuBox.classList.add("menu-box");

  const categorias = {};

  doces.forEach((doce) => {
    if (!categorias[doce.categoria]) {
      categorias[doce.categoria] = [];
    }
    categorias[doce.categoria].push(doce);
  });

  Object.keys(categorias).forEach((categoria) => {

    const titulo = document.createElement("h2");
    titulo.classList.add("titulo-categoria");
    titulo.textContent = formatarCategoria(categoria);
    menuBox.appendChild(titulo);

    const descricao = document.createElement("p");
    descricao.classList.add("descricao-geral");

    if (categoria === "ovos-colher") {
      descricao.textContent = "Ovos artesanais recheados • Aprox. 350g";
    } else if (categoria === "kit-mini-ovos") {
      descricao.textContent = "Mini ovos de colher • Escolha os sabores";
    }

    menuBox.appendChild(descricao);

    categorias[categoria].sort((a, b) => {
      return a.pesos[0].preco - b.pesos[0].preco;
    });

    categorias[categoria].forEach((doce) => {

      const item = document.createElement("div");
      item.classList.add("item-menu");

      item.innerHTML = `
        <div class="d-flex justify-content-between align-items-center">
          <span class="nome-item">${doce.nome}</span>
          <span class="preco">R$ ${doce.pesos[0].preco.toFixed(2)}</span>
        </div>
      `;

      menuBox.appendChild(item);
    });

  });

  container.appendChild(menuBox);
}

function formatarCategoria(categoria) {
  if (categoria === "ovos-colher") return "OVOS DE COLHER";
  if (categoria === "kit-mini-ovos") return "KIT MINI OVOS";
  return categoria.toUpperCase();
}