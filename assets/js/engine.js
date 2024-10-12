
const emojis = [
    "😊", "🤖", "😈", "🧐", "😒", "😁",
    "😊", "😒", "😁", "😈", "🧐", "🤖",
    "🧛‍♂️", "🧛‍♂️", "⚾", "⚾",
];

let openCards = [];

let shuffleEmojis = emojis.sort(()=>(Math.random() > 0.5 ? 2 : -1));

for (let i=0; i < emojis.length; i++){  // interando até o tamanho do vetor
    let box = document.createElement("div");  //criando a div
    box.className = "item";  // nome da class da criação
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;  // adicionando a função ao clique
    document.querySelector(".game").appendChild(box);
} 

function handleClick() {
    if (openCards.length < 2) {
        this.classList.add("boxOpen");
        openCards.push(this);
    }


    if (openCards.length == 2){
        setTimeout(checkMatch, 500);
    }

    console.log(openCards);
}

function checkMatch() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    } else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }

    openCards = [];
    // Adicionando Vitória
    if (document.querySelectorAll(".boxMatch").length === emojis.length) {
        alert("Você Ganhou !")
    }
}


    