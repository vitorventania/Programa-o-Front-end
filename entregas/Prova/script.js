function add() {
  const container = document.getElementById("Cards");
  if (!container) return;

  const cardHTML = `
	<div class="card ms-3" style="width: 22rem;">
		<img src="img/Lucas_Paqueta.webp" class="card-img-top" alt="Lucas Paqueta">
		<div class="card-body">
			<h5 class="card-title">Lucas Tolentino Coelho de Lima <span class="badge text-bg-secondary">8,8</span></h5>
			<p class="card-text">
				<span><strong>Nascimento:</strong> 27/08/1997</span><br>
				<span><strong>Altura:</strong> 1,80 m</span><br>
				<span><strong>Posição:</strong> Meio-campista</span><br>
			</p>
		</div>
	</div>
	`;

  container.insertAdjacentHTML("beforeend", cardHTML);
}
