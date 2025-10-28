// Animação de aparecer ao rolar
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

// Mostrar / ocultar seções
const btnTitulos = document.getElementById('btnTitulos');
const btnPoses = document.getElementById('btnPoses');
const secaoTitulos = document.getElementById('titulos');
const secaoPoses = document.getElementById('poses');

btnTitulos.addEventListener('click', () => {
    secaoTitulos.classList.toggle('mostrar');
    secaoPoses.classList.remove('mostrar');
    secaoTitulos.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

btnPoses.addEventListener('click', () => {
    secaoPoses.classList.toggle('mostrar');
    secaoTitulos.classList.remove('mostrar');
    secaoPoses.scrollIntoView({ behavior: 'smooth', block: 'center' });
});
