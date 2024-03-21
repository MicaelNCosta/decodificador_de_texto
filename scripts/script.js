var btnCriptografar = document.querySelector(".btn_criptografar");
var btnDescriptografar = document.querySelector(".btn_descriptografar");
var menino_lupa = document.querySelector(".menino_lupa");
var paragrafo = document.querySelector(".paragrafo");
var resultado = document.querySelector(".texto_resultado");

btnCriptografar.onclick = criptografar;
btnDescriptografar.onclick = descriptografar;

function criptografar(){
  esconderTexto();
  var Digite_texto = recuperarTexto();
  resultado.textContent = criptografarTexto(Digite_texto);
}

function descriptografar(){
  esconderTexto();
  var Digite_texto = recuperarTexto();
  resultado.textContent = descriptografarTexto(Digite_texto);
}

function recuperarTexto(){
  var Digite_texto = document.querySelector(".Digite_texto");
  return Digite_texto.value
}

function esconderTexto(){
  menino_lupa.classList.add("esconder");
  paragrafo.classList.add("esconder");
  var Digite_texto = document.querySelector(".Digite_texto");
  
}
function criptografarTexto(mensagem){
  var texto = mensagem;
  var textoFinal = "";

  for(var i = 0; i < texto.length; i++){
     if(texto[i] == "a"){
      textoFinal = textoFinal + "ai";
     } 
     else if(texto[i] == "e"){
      textoFinal = textoFinal + "enter";
     }
     else if(texto[i] == "i"){
      textoFinal = textoFinal + "imes";
     }
     else if(texto[i] == "o"){
      textoFinal = textoFinal + "ober";
     }
     else if(texto[i] == "u"){
      textoFinal = textoFinal + "ufat";
     }
     else{
      textoFinal = textoFinal + texto[i];
     }
  }
  return textoFinal;
}

function descriptografarTexto(mensagem){
  var texto = mensagem;
  var textoFinal = "";

  for(var i = 0; i < texto.length; i++){
     if(texto[i] == "a"){
      textoFinal = textoFinal + "a"
        i = i+1;
     } 
     else if(texto[i] == "e"){
      textoFinal = textoFinal + "e"
      i = i+4;
     }
     else if(texto[i] == "i"){
      textoFinal = textoFinal + "i"
      i = i+3;
     }
     else if(texto[i] == "o"){
      textoFinal = textoFinal + "o"
      i = i+3;
     }
     else if(texto[i] == "u"){
      textoFinal = textoFinal + "u"
      i = i+3;
     }
     else{
      textoFinal = textoFinal + texto[i];
     }
  }
  return textoFinal;
}


const btnCopiar = document.querySelector(".btn_copiar");
btnCopiar.addEventListener("click", () => {
  var conteudo = document.querySelector(".texto_resultado").textContent;
  navigator.clipboard.writeText(conteudo);
});
