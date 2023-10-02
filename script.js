const resposta = document.querySelector(".resposta");
const botao = document.querySelectorAll(".botao");
const apagar = document.querySelector(".apagar");
const mostrar = document.querySelector("#show");
let conta = []; 
let calc = 0; 

// repeticao de numeros
for (let i = 0; i < botao.length; i++) { 
  const botaoAtual = botao[i];
  botaoAtual.addEventListener("click", () => exibir(botaoAtual.value));
}

//coletando dados para realizar calculo 

function exibir(valor) {
  conta += valor;
  resposta.innerHTML = conta;
}

mostrar.addEventListener("click", calculo); // chama a função calculo apos clique = 

function calculo() {
  try {
    calc = eval(conta);
    resposta.innerHTML = calc;
  } catch (error) {
    resposta.innerHTML = "Conta inválida"
  }
}


// para apagar os elementos para recriar novo calculo 
apagar.addEventListener("click", () => {
  conta = "";
  calc = 0;
  resposta.innerHTML = "";
});
