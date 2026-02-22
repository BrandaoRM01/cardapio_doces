import { formatarPreco } from "../utils/format.js";

export function criarCard(doce) {
  return `
    <div class="col-md-4 mb-4">
      <div class="card doce-card h-100 shadow-sm">
        <img src="${doce.imagem}" class="card-img-top" alt="${doce.nome}">
        <div class="card-body">
          <h5 class="card-title text-center">${doce.nome}</h5>
          <p class="card-text descricao">${doce.descricao}</p>
          <p class="peso text-center">Peso: ${doce.peso}</p>
          <div class="text-center">
            <span class="preco">
              ${formatarPreco(doce.preco)}
            </span>
          </div>
        </div>
      </div>
    </div>
  `;
}