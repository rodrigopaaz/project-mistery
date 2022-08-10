let input = document.getElementById('carta-texto');
let paragrafo = document.getElementById('carta-gerada');
let botao = document.getElementById('criar-carta');
let spanCount = document.getElementsByClassName('carta')

botao.addEventListener('click', function () {
  
    if (spanCount.length !== 0) {
        for (let index = 0; index <= spanCount.length + 5; index += 1) {
          paragrafo.removeChild(spanCount[0]);
        }
      }
  if(input.value !== ""){
    let valor = input.value;
   valor = valor.split(' ');
  for (let index = 0; index <= valor.length - 1; index += 1) {
    let span = document.createElement('span');
    let texto = document.createTextNode(valor[index]);
    span.appendChild(texto);
    paragrafo.appendChild(span);
    span.className = 'carta'
  }
  
}else {paragrafo.innerHTML = 'Por favor, digite o conteúdo da carta.'}

});
