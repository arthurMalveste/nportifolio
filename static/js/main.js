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
// Função para iniciar a animação das letras
        function startLetterAnimation() {
            const letters = document.querySelectorAll('.letter');

            letters.forEach((letter, index) => {
                // Definir atraso de animação para cada letra
                letter.style.animationDelay = `${index * 0.2}s`;
            });
        }

        // Função para esconder o loader
        function hideLoader() {
            const loader = document.getElementById('loader');
            
            // Define animação de saída (fade out) para o loader
            loader.style.animation = 'fadeOut 0.5s ease forwards';
            
            // Após a animação de saída terminar, remova o loader do DOM
            loader.addEventListener('animationend', function() {
                loader.style.display = 'none';
            });
        }

        // Inicia a animação das letras ao carregar a página
        window.addEventListener('load', () => {
            startLetterAnimation();

            // Esconde o loader após 3 segundos
            setTimeout(hideLoader, 3000);
        });

        // Função para animar a div card-client
        function animateCardClient() {
            const cardClient = document.getElementById('cardClient');

            // Animação da borda surgindo aos poucos
            anime({
                targets: cardClient,
                borderColor: ['transparent', '#000000'],
                easing: 'linear',
                duration: 2000,
            });

            // Após a animação da borda, anima o ::after
            setTimeout(() => {
                // Define altura de `card-client::after`
                cardClient.style.setProperty('--after-height', '80%');
                const cardClientAfter = cardClient.querySelector('::after');

                if (cardClientAfter) {
                    cardClientAfter.style.height = '80%';
                }
            }, 2000); // Delay para começar após animação da borda
        }

        // Inicia a animação ao carregar a página
        window.addEventListener('load', animateCardClient);

        // Evento de rolagem para manipular o estilo da barra de navegação
        window.addEventListener('scroll', function() {
            const top = window.scrollY;
            const header = document.querySelector('.navbar');
            
            if (top >= 100) {
                header.classList.add('navbarDark');
            } else {
                header.classList.remove('navbarDark');
            }
        });