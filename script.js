$().ready(function () {
	$(".polaroid-slider").slick({
		arrows: true,
		slidesToShow: 1,
		infinite: true,
		dots: true
	});
});

// Função para adicionar eventos de clique aos botões do LinkedIn
document.addEventListener("DOMContentLoaded", function () {
	// Mapeamento dos IDs dos botões e URLs do LinkedIn
	const linkedinProfiles = {
	  btnlinkedin1: "https://www.linkedin.com/in/jo%C3%A3o-v-carvalho-261242265?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B4YVjSE3xTvuFLcigSBrySw%3D%3D",
	  btnlinkedin2: "https://www.linkedin.com/in/luana-de-jesus-lima-8b17a9266",
	  btnlinkedin3: "https://www.linkedin.com/in/lucassantanadev",
	  btnlinkedin4: "https://www.linkedin.com/in/luiza-yoshida-0ab592265?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BeEy9PJDoSgifY9NRPcRs4g%3D%3D",
	  btnlinkedin5: "https://www.linkedin.com/in/renan-avelino",
	};
  
	// Adicionando eventos de clique aos botões
	Object.keys(linkedinProfiles).forEach((buttonId) => {
	  const button = document.getElementById(buttonId);
	  if (button) {
		button.addEventListener("click", () => {
		  const url = linkedinProfiles[buttonId];
		  window.open(url, "_blank"); // Abre o link em uma nova aba
		});
	  } else {
		console.warn(`Botão com ID '${buttonId}' não encontrado no DOM.`);
	  }
	});
  });
  
