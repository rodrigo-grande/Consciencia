
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



const modalTitulos = document.getElementById('modalTitulos');
const modalPoses = document.getElementById('modalPoses');
const btnTitulos = document.getElementById('btnTitulos');
const btnPoses = document.getElementById('btnPoses');
const fecharBtns = document.querySelectorAll('.fechar');


btnTitulos.onclick = () => modalTitulos.style.display = 'block';
btnPoses.onclick = () => modalPoses.style.display = 'block';


fecharBtns.forEach(btn => {
  btn.onclick = () => {
    btn.closest('.modal').style.display = 'none';
  };
});


window.onclick = (e) => {
  if (e.target.classList.contains('modal')) {
    e.target.style.display = 'none';
  }
};
