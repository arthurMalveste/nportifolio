// Animação de digitação no título com efeito de digitação
const h1 = document.querySelector('h1');
let text = h1.textContent;
let index = 0;
let typingSpeed = 100; /* Ajuste a velocidade de digitação */

function typeWriter() {
  h1.textContent = text.substring(0, index);
  index++;

  if (index > text.length) {
    clearInterval(interval);
  }
}

const interval = setInterval(typeWriter, typingSpeed);


// Selecionar todas as seções do portfólio
const sections = document.querySelectorAll('section');

// Função para rolar para a próxima seção
function scrollToNextSection(currentSection) {
  const nextSection = currentSection.nextElementSibling;

  if (nextSection) {
    window.scrollTo({
      top: nextSection.offsetTop,
      behavior: 'smooth'
    });
  }
}

// Adicionar evento de scroll na janela
window.addEventListener('scroll', function() {
  const activeSection = document.querySelector('section:not([hidden])');

  if (activeSection) {
    const scrollPosition = window.scrollY + window.innerHeight * 0.75; // Posição de scroll 75% abaixo da altura da tela

    if (scrollPosition > activeSection.offsetTop) {
      scrollToNextSection(activeSection);
    }
  }
});
