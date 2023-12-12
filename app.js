let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numerosecreto = gerarNumeroAleratorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto); {
let campo = document.querySelector(tag);
campo.innerHTML = texto;
ResponsiveVoice.speak(texto, 'Brailian Portuguese Famele', {rate:1.2});
}

function exibirTextoNaTela(teag, texto) {
let campo = document.querySelector(tag)
exibirTextoNaTela();

function verificarchute() {
     let chute = documentquerySelector('input').value;
     
     if (chute == numeroSecreto) {
         exibirTextoNaTela('h1','Acertou');
         let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

         let mensagemTentativa = `Você descobriu o número secreto com${tentativas} ${tentativas}!`;

         exibirTextoNaTela('p', 'mensagemTentativas');
    } else {;]
         if (chute > numeroSecreto) {
          exibirTextoNaTela('p', 'O número secreto e menor');
          else {
            exibirTextoNaTela('p', 'O número secreto e maior ');
          }
              }
              tentativas++;
              limparCampo
}

function gerarNumeroAleratorio() {
  let parseInt(Math.random() * numeroLimite + 1);   
  let quantidadeDeElementosNalista = listaDeNumerosSorteados.legth;

  if (quantidadeDeElementosNalista == 3){
    listaDeNumerosSorteados = [];
  }

  if (listaDeNumerosSorteados.includes(numeroEscolhido)){
   return gerarNumeroAleratorio();
} else {
listaDeNumerosSorteados.push(numeroEscolhido);
console.log(listaDeNumerosSorteados);
return numeroEscolhido;

}

}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
  numerosecreto = gerarNumeroAleratorio();
  limparCampo();
  tentativas = 1;
  exibirTextoNaTelaQ();
  document.getElementById('reiniciar').setAttribute('disable', 'true');
}










