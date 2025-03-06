import smoothScroll from 'smoothscroll';

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
            setTimeout(hideLoader, 3400);
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

        // Add smooth scroll effect for navigation
document.addEventListener('DOMContentLoaded', () => {
    // Reveal animations for project cards
    const projectCards = document.querySelectorAll('.project-card');
    
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const cursorBlur = document.createElement('div');
    cursorBlur.classList.add('cursor-blur');
    document.body.appendChild(cursorBlur);

    document.addEventListener('mousemove', (e) => {
        cursorBlur.style.transform = `translate(${e.clientX - 50}px, ${e.clientY - 50}px)`;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const successMessage = document.getElementById('success-message');

    // Função de validação do e-mail
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Validação dos campos
    function validateName() {
        if (nameInput.value.trim() === '') {
            nameInput.classList.add('error');
            nameError.style.display = 'block';
            return false;
        } else {
            nameInput.classList.remove('error');
            nameError.style.display = 'none';
            return true;
        }
    }

    function validateEmail() {
        if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value)) {
            emailInput.classList.add('error');
            emailError.style.display = 'block';
            return false;
        } else {
            emailInput.classList.remove('error');
            emailError.style.display = 'none';
            return true;
        }
    }

    // Evento de submissão do formulário
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const isNameValid = validateName();
        const isEmailValid = validateEmail();

        if (isNameValid && isEmailValid) {
            // Preparar os dados para envio
            const formData = {
                name: nameInput.value.trim(),
                email: emailInput.value.trim(),
                message: messageInput.value.trim()
            };

            // Enviar os dados usando Fetch API
            fetch('https://seu-backend.com/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao enviar o formulário');
                }
                return response.json();
            })
            .then(data => {
                // Exibir mensagem de sucesso
                successMessage.style.display = 'block';
                contactForm.reset();

                // Esconder a mensagem após 5 segundos
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 5000);
            })
            .catch(error => {
                console.error('Erro:', error);
                alert('Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.');
            });
        }
    });

    // Validação em tempo real
    nameInput.addEventListener('blur', validateName);
    emailInput.addEventListener('blur', validateEmail);
});