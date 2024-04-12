const header = document.querySelector('.navbar');

window.onscroll = function() {
  var top = window.scrollY;
  if(top >=100) {
    header.classList.add('navbarDark');
  }
  else {
    header.classList.remove('navbarDark');
  }
}

// Add your custom JavaScript code here

// Função para animar a borda da div card-client
function animateCardClient() {
  const cardClient = document.getElementById('cardClient');

  // Animação para a borda surgindo aos poucos
  anime({
      targets: cardClient,
      borderColor: ['transparent', '#000000'], // Borda de transparente para preta
      easing: 'linear',
      duration: 2000, // Duração da animação (2 segundos)
  });

  // Após a animação da borda, animar o ::after
  setTimeout(() => {
      cardClient.style.setProperty('--after-height', '80%'); // Ajuste da altura para o pseudo-elemento

      // Adiciona uma transição de altura para o pseudo-elemento
      const cardClientAfter = document.querySelector('.card-client::after');
      cardClientAfter.style.transition = 'height 2s linear';
      
      // Define a altura do pseudo-elemento ::after para 80%
      cardClientAfter.style.height = '80%';
  }, 2000); // Delay para começar após a animação da borda
}

// Inicia a animação ao carregar a página
window.addEventListener('load', animateCardClient);