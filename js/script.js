//Variáveis
var input = document.querySelector('#input-texto');
input.focus();
var cripto = document.querySelector('#btn-cripto');
var descripto = document.querySelector('#btn-descripto');
var copiar = document.querySelector('#btn-copy');
var output = document.querySelector('#msg');

//Funções

function encriptar() {
  var texto = input.value;
  msg = '';

  if (/^[a-z ,.!?;:()]+$/g.test(input.value)) {
    for (var i = 0; i < texto.length; i++) {
      if (texto[i] == 'e') {
        msg = msg + 'enter';
      }else if (texto[i] == 'i') {
        msg = msg + 'imes';
      }else if (texto[i] == 'a') {
        msg = msg + 'ai';
      }else if (texto[i] == 'o') {
          msg = msg + 'ober';
      }else if (texto == 'u') {
        msg = msg + 'ufat';
      }else {
        msg = msg + texto[i];
      }
    }
    output.value = msg;
  }else {
    output.value = "Erro! Apenas letras minúsculas e sem acentos são aceitas."
  }

}

cripto.onclick = encriptar;


function desencriptar() {

}

function copiar() {

}
