
const elementos = document.querySelectorAll('.texto, .imagem');

function aparecerAoRolar() {
    const alturaJanela = window.innerHeight;
    elementos.forEach(el => {
        const posicao = el.getBoundingClientRect().top;
        if (posicao < alturaJanela - 100) {
            el.classList.add('visivel');
        }
    });
}

window.addEventListener('scroll', aparecerAoRolar);
window.addEventListener('load', aparecerAoRolar);
