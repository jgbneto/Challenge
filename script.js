function criptografar() {
    var textoEscrito = document.querySelector(".text-area").value;
    var textoSaida = document.querySelector(".mensagem");
  
    var textoNovo = textoEscrito
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
  
    textoSaida.value = textoNovo;
  }
  
  function descriptografar() {
    var textoEscrito = document.querySelector(".text-area").value;
    var textoSaida = document.querySelector(".mensagem");
  
    var textoNovo = textoEscrito
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
  
    textoSaida.value = textoNovo;
  }
  
  function textoCopiado() {
    var textoSaida = document.querySelector(".mensagem");
    textoSaida.select();
    document.execCommand("copy");
  }
  
  document.querySelector(".botao-criptografar").addEventListener("click", criptografar);
  document.querySelector(".botao-descriptografar").addEventListener("click", descriptografar);
  document.querySelector(".botao-copiar").addEventListener("click", textoCopiado);
  