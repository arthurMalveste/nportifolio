const popup = document.getElementById('popup');
        const arrow = document.getElementById('arrow');

        // O popup está desativado no HTML: sem a guarda, o addEventListener
        // quebra em null e derruba o restante do script.
        if (arrow && popup) {
            arrow.addEventListener('click', function() {
                popup.classList.toggle('active');
            });
        }
