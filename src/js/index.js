/* 


OBJETIVO 1 - quando o usuário clicar o botão de veja o trailer, devemos abrir a modal com o vídeo do trailer
    - passo 1 - dar um jeito de pegar o elemento que representa o botão tela usando o js
    - passo 2 - dar um jeito de identificar quando o usuário clicar no botão
    - passo 3 - dar um jeito de pegar o elemento da modal no js
    - passo 4 - abrir o modal na tela


OBJETIVO 2 - quando o usuário clicar no X, devemos fechar a modal
    - passo 1 - dar um jeito de pegar o elemento de fechar modal usando js
    - passo 2 - dar um jeito de identificar quando o usuário clicar o X
    - passo 3 - fechar a modal


*/

// console.log("mostrar o document", document)

// console.log(document.querySelector(".button-trailer"))

const buttonTrailer = document.querySelector(".button-trailer");

const buttonCloseModal = document.querySelector(".close-modal")
// console.log(buttonCloseModal);

const video = document.getElementById("video");
// console.log(video.src);


const modal = document.querySelector(".modal");
// console.log("mostar o objeto da modal", modal);


const linkVideo = video.src;
// console.log(linkVideo);


function toggleModal() {
    modal.classList.toggle("open")
}


buttonTrailer.addEventListener("click", () => {
    // console.log("clicou no botão de veja o trailer");
    // console.log(modal.classList);
    // modal.classList.add("open");
    // modal.classList.toggle("open")
    toggleModal();
    video.setAttribute("src", linkVideo)
    
});



// OBJETIVO 2




buttonCloseModal.addEventListener("click", () => {
    // modal.classList.remove("open");
    // modal.classList.toggle("open")
    toggleModal();
    video.setAttribute("src", "")
})


