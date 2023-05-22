/*
Qnd clicar no botão de troca de tema tem que alterar a cor do tema da página e a imagem

        -passo 1 (linha 16) - pegar no js o elemento html correspondente ao botão de troca de tema 
        -passo 2 (linha 18) - pegar no js o elemento html correspondente ao body
        -passo 3 (linha 20) - pegar no js o elemento html correspondente a imagem do btn de troca tema
        -passo 4 (linha 22) - identificar o clique do usuário no botão de troca de tema
        -passo 5 (linha 24) - verificar se existe uma classe modo-escuro na tag body
        -passo 6 (linha 26) - adicionar ou remover o a classe modo-escuro automaticamente através do toggle
        -passo 6 (linha 28) - se o modo escuro estiver ativo
        -passo 8 (linha 29) - trocar a img do btn de alterar tema pra sol
        -passo 9 (linha 31) - se o modo escuro n estiver ativo
        -passo 11 (linha 32) - trocar a img do btn de alterar tema para lua
*/

const btnAlterarTema = document.getElementById("btn-alterar-tema");

const body = document.querySelector("body");

const imgBtnAlterarTema = document.querySelector(".img-btn")

btnAlterarTema.addEventListener("click", () => {

    const modoEscuroAtivo = body.classList.contains("modo-escuro")
    
    body.classList.toggle("modo-escuro");
    
    if(modoEscuroAtivo) {
        imgBtnAlterarTema.setAttribute("src", "src/imagens/sun.png");
    } 
    else {
        imgBtnAlterarTema.setAttribute("src", "src/imagens/moon.png");
    }
});

