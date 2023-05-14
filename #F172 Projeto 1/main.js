// variaveis
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
const error = document.querySelector(".error");
let randomNumber = Math.floor(Math.random() * 10);
let tent = 0;

//eventos
btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', handleResetClick);

// função callback
function handleTryClick(event) {
    event.preventDefault();
    tent++;

    const inputNumber = document.querySelector("#inputNumber");

    if (Number(inputNumber.value) == randomNumber) {
        toggleScreen();
        document.querySelector("h2").innerText = `Acertou em ${tent} tentativas`
    }else{
        error.classList.remove("hide");
        setTimeout(() => {
            error.classList.add("hide");
        }, 1500);
    }
    inputNumber.value = "";
}

function handleResetClick(){
    toggleScreen();
    randomNumber = Math.floor(Math.random() * 10);
    tent = 0;
}

function toggleScreen(){
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
}