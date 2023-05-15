// objeto modal
export const modal = {
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

{ //esc fechar modal
    window.addEventListener("keydown", function(event) {
        if (event.key === "Escape" && modal.wrapper.classList.contains("open"))
            modal.toggle()
    });
}