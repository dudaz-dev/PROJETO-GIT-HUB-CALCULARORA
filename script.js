function inserir(num) {
  document.querySelector(".resultado").innerHTML += num;
}

function limpar() {
  document.querySelector(".resultado").innerHTML = "";
}

function volteUm() {
  let tela = document.querySelector(".resultado").innerHTML;
  document.querySelector(".resultado").innerHTML = tela.substring(0, tela.length - 1);
}