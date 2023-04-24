let input = document.getElementById('carta-texto');
let paragrafo = document.getElementById('carta-gerada');
let botao = document.getElementById('criar-carta');
let spanCount = document.getElementsByClassName('carta');
let classes = [
  'newspaper',
  'magazine1',
  'magazine2',
  'medium',
  'big',
  'reallybig',
  'rotateleft',
  'rotateright',
  'skewleft',
  'skewright',
];

botao.addEventListener('click', () => {
  paragrafo.innerText = '';
  if (spanCount.length !== 0) {
    for (let index = 0; index <= spanCount.length + 5; index += 1) {
      paragrafo.removeChild(spanCount[0]);
    }
  }
  if (input.value !== '' && input.value !== ' ') {
    let valor = input.value;
    valor = valor.split(' ');
    for (let index = 0; index <= valor.length - 1; index += 1) {
      const span = document.createElement('span');
      const texto = document.createTextNode(valor[index]);
      span.appendChild(texto);
      paragrafo.appendChild(span);
      span.className = 'carta';
      const counter = Math.floor(Math.random() * 11);
      span.classList.add(classes[counter]);
    }
  } else {
    paragrafo.innerHTML = 'Por favor, digite o conteúdo da carta.';
  }
});

paragrafo.addEventListener('click', () => {
  const counter = Math.floor(Math.random() * 11);
      span.classList.add(classes[counter]);
    }
)