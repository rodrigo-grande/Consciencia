// ======= ANIMAÇÃO DE ENTRADA =======
const elementos = document.querySelectorAll('.texto, .imagem');

function aparecerAoRolar() {
    const alturaJanela = window.innerHeight;
    elementos.forEach(el => {
        const posicao = el.getBoundingClientRect().top;
        if (posicao < alturaJanela - 100) el.classList.add('visivel');
    });
}
window.addEventListener('load', aparecerAoRolar);
window.addEventListener('scroll', aparecerAoRolar);

// ======= FUNÇÃO GENÉRICA DE MODAIS =======
function configurarModal(botaoId, modalId) {
    const botao = document.getElementById(botaoId);
    const modal = document.getElementById(modalId);
    const overlays = modal.querySelectorAll('[data-close]');
    const fecharBtns = modal.querySelectorAll('.modal-close');

    const abrir = () => {
        modal.hidden = false;
        modal.setAttribute('open', '');
        document.body.style.overflow = 'hidden';
    };

    const fechar = () => {
        modal.removeAttribute('open');
        modal.hidden = true;
        document.body.style.overflow = '';
    };

    botao.addEventListener('click', abrir);
    overlays.forEach(el => el.addEventListener('click', fechar));
    fecharBtns.forEach(el => el.addEventListener('click', fechar));
    window.addEventListener('keydown', e => {
        if (e.key === 'Escape' && !modal.hidden) fechar();
    });
}

configurarModal('btn-competicoes', 'modal-competicoes');
configurarModal('btn-poses', 'modal-poses');
