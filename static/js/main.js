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

function animateCardClient() {
  const cardClient = document.getElementById('cardClient');

  anime({
      targets: cardClient,
      borderColor: ['transparent', '#000000'], 
      easing: 'linear',
      duration: 2000,
  });

  setTimeout(() => {
      cardClient.style.setProperty('--after-height', '80%');

      
      const cardClientAfter = document.querySelector('.card-client::after');
      cardClientAfter.style.transition = 'height 2s linear';
      
      
      cardClientAfter.style.height = '80%';
  }, 2000);
}


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

    function checkScroll() {
      const timelineItems = document.querySelectorAll('.timeline-item');
      
      timelineItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (itemTop < windowHeight * 0.8) {
          item.classList.add('visible');
        }
      });
    }
    
    window.addEventListener('scroll', checkScroll);
    window.addEventListener('load', checkScroll);

    document.addEventListener("DOMContentLoaded", function () {
    const loader = document.querySelector(".loader");
    
    function showLoader() {
        loader.style.display = "block";
    }

    function hideLoader() {
        loader.style.display = "none";
    }

    // Simulando um carregamento de 3 segundos antes de esconder o loader
    showLoader();
    setTimeout(hideLoader, 3000);
});