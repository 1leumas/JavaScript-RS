import { modal } from "./modal.js";
import { alertError } from "./alert-error.js";

const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

form.oninput = (event) => {
    alertError.close();
}

form.onsubmit = (event) => {
    event.preventDefault();

    const weight = inputHeight.value;
    const height = inputWeight.value;


    const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height);
    if(weightOrHeightIsNotANumber){
        alertError.open();
        return;
    }

    const IMC = (height / ((weight / 100) **2)).toFixed(2);
    const message = `Seu IMC e de ${IMC}!`;
    alertError.close();
    modal.message.innerText = message;
    modal.toggle();

    console.log(height)
    console.log(weight)
}

function notNumber(value){
    return isNaN(value) || value == "";
}