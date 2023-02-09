const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu-lista");
const escButton = document.querySelectorAll('.segmento-menu > button');

// Função que troca imagem da galeria
function mudarImagem(galeria,novaImagem){
    document.getElementById(galeria).src=novaImagem;
}

// Função que adiciona o menu hamburguer
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

// Função que remove o menu hamburguer ao clicar
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

// Função que adiciona classe ao botão clicado
escButton.forEach(function(key){
    key.addEventListener('click', function(){
        removeStyles();
        this.setAttribute('class', 'buttonClicked');
    });
})

// Função que remove a classe anterior ao clicar em outro botão
function removeStyles(){
    for(let i = 0;i < escButton.length;i++){
        document.querySelectorAll('.segmento-menu > button')[i].removeAttribute('class');
    }
}