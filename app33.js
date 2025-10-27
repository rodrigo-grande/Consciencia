// ======= ANIMAÇÃO DE APARECIMENTO (scroll) =======
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

// chamar no load e scroll
window.addEventListener('load', aparecerAoRolar);
window.addEventListener('scroll', aparecerAoRolar);

// ======= LOGICA DA MODAL =======
const btnAbrir = document.getElementById('btn-competicoes');
const modal = document.getElementById('modal-competicoes');
const btnFechar = document.getElementById('modal-close');
const btnFechar2 = document.getElementById('modal-close-2');

// abrir modal
function abrirModal() {
    modal.hidden = false;
    modal.setAttribute('open', '');
    // foco para acessibilidade
    const primeiroFechar = btnFechar || btnFechar2;
    if (primeiroFechar) primeiroFechar.focus();
    // evitar scroll do body
    document.body.style.overflow = 'hidden';
}

// fechar modal
function fecharModal() {
    modal.removeAttribute('open');
    modal.hidden = true;
    document.body.style.overflow = '';
    btnAbrir.focus(); // devolve foco ao botão
}

// eventos de abrir/fechar
btnAbrir.addEventListener('click', abrirModal);
if (btnFechar) btnFechar.addEventListener('click', fecharModal);
if (btnFechar2) btnFechar2.addEventListener('click', fecharModal);

// fechar clicando no overlay
document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', fecharModal);
});

// fechar pelo ESC
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hidden) {
        fecharModal();
    }
});
