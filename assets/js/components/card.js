import { formatarPreco } from "../utils/format.js";

export function criarCard(doce) {
    return `
    <div class="col-md-4 mb-4">
      <div class="card h-100 shadow-sm">
        <img src="${doce.imagem}" class="card-img-top" alt="${doce.nome}">
        <div class="card-body text-center">
          <h5>${doce.nome}</h5>
          <p>Peso: ${doce.peso}</p>
          <span class="badge bg-success fs-6">
            ${formatarPreco(doce.preco)}
          </span>
        </div>
      </div>
    </div>
  `;
}