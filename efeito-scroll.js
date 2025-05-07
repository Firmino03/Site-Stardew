const elementos = document.querySelectorAll('.revelar');

const aparecer = () => {
  elementos.forEach(el => {
    const topElemento = el.getBoundingClientRect().top;
    const alturaTela = window.innerHeight;

    if (topElemento < alturaTela - 100) {
      el.classList.add('visivel');
    }
  });
};

window.addEventListener('scroll', aparecer);
window.addEventListener('load', aparecer);
