const popup = document.getElementById('popup');
        const arrow = document.getElementById('arrow');

        arrow.addEventListener('click', function() {
            popup.classList.toggle('active');
        });