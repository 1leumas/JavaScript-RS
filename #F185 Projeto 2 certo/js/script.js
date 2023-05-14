const alertError = {
    element: document.querySelector('.alert-error'),
    open(){
        alertError.element.classList.add('open');
    },
    close(){
        alertError.element.classList.remove('open');
    }
}

// objeto modal
const modal = {
    wrapper: document.querySelector(".modal-wrapper"),
    message: document.querySelector(".modal .title span"),
    buttonClose: document.querySelector(".modal button.close"),

    toggle() {
        modal.wrapper.classList.toggle("open");
    }
}

//funcao botao fechar modal
modal.buttonClose.onclick = () => {
    modal.toggle();
}

// form
const form = document.querySelector("form");

form.oninput = (event) => {
    alertError.close();
}

form.onsubmit = (event) => {
    event.preventDefault();

    const weight = Number(document.querySelector("#weight").value);
    const height = Number(document.querySelector("#height").value);

    console.log(weight, height)

    if(isNaN(weight) || isNaN(height) || weight ===  0 ||  height ===  0){
        alertError.open();
        return;
    }

    const IMC = (weight / ((height / 100) ** 2)).toFixed(2);

    alertError.close();
    modal.message.innerText = `Seu IMC e de ${IMC}!`;
    modal.toggle();
}

//esc fechar modal
window.addEventListener("keydown", function(event) {
    if (event.key === "Escape" && modal.wrapper.classList.contains("open")) modal.toggle();
});