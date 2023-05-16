const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");
let minutes = Number(minutesDisplay.textContent);
let timerTimeOut;

const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true");
const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true");
const bgAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true");

bgAudio.loop = true;

const playFuncionalidades = {
    play: document.querySelector(".play"),

    aparecerBotaoPlay() {
        playFuncionalidades.play.classList.remove("hide");
    },

    esconderBotaoPlay() {
        playFuncionalidades.play.classList.add("hide");
    }
}

const pauseFuncionalidades = {
    pause: document.querySelector(".pause"),

    aparecerBotaoPause() {
        pauseFuncionalidades.pause.classList.remove("hide");
    },

    esconderBotaoPause() {
        pauseFuncionalidades.pause.classList.add("hide");
    }
}

const stopFuncionalidades = {
    stop: document.querySelector(".stop"),

    aparecerBotaoStop() {
        this.stop.classList.remove("hide");
    },

    esconderBotaoStop() {
        this.stop.classList.add("hide");
    }
}

const setFuncionalidades = {
    set: document.querySelector(".set"),

    aparecerBotaoSet() {
        this.set.classList.remove("hide");
    },

    esconderBotaoSet() {
        this.set.classList.add("hide");
    },

    setarMinutos() {
        minutes = Number(prompt("Quantos Minutos?"))
        if (isNaN(minutes)) {
            minutes = 0;
            alert("Valor Inválido!");
        }
    }
}

const soundOnFuncionalidades = {
    soundOn: document.querySelector(".sound-on"),

    aparecerBotaoSoundOn() {
        this.soundOn.classList.remove("hide");
    },

    esconderBotaoSoundOn() {
        this.soundOn.classList.add("hide");
    }
}

const soundOffFuncionalidades = {
    soundOff: document.querySelector(".sound-off"),

    aparecerBotaoSoundOff() {
        this.soundOff.classList.remove("hide");
    },

    esconderBotaoSoundOff() {
        this.soundOff.classList.add("hide");
    }
}

function countdown() {
    timerTimeOut = setTimeout(function () {
        let seconds = Number(secondsDisplay.textContent);
        let minutes = Number(minutesDisplay.textContent);

        if (minutes <= 0 && seconds <= 0) {
            resetCountdown();
            if(soundOffFuncionalidades.soundOff.classList.contains("hide")){
                kitchenTimer.play();
            }
            return;
        }

        if (seconds <= 0) {
            seconds = 60;

            minutesDisplay.textContent = String(minutes - 1).padStart(2, "0");
        }

        secondsDisplay.textContent = String(seconds - 1).padStart(2, "0");

        countdown();
    }, 1000)
}

function resetCountdown() {
    pauseFuncionalidades.esconderBotaoPause();
    stopFuncionalidades.esconderBotaoStop();
    playFuncionalidades.aparecerBotaoPlay();
    setFuncionalidades.aparecerBotaoSet();
}

function playAudioButtonPress(){
    if(soundOffFuncionalidades.soundOff.classList.contains("hide")){
        buttonPressAudio.play();
    } else {
        return;
    }
}

playFuncionalidades.play.onclick = () => {
    playFuncionalidades.esconderBotaoPlay();
    pauseFuncionalidades.aparecerBotaoPause();
    setFuncionalidades.esconderBotaoSet();
    stopFuncionalidades.aparecerBotaoStop();
    playAudioButtonPress()

    countdown();
}

pauseFuncionalidades.pause.onclick = () => {
    pauseFuncionalidades.esconderBotaoPause();
    playFuncionalidades.aparecerBotaoPlay();
    clearTimeout(timerTimeOut);
    playAudioButtonPress()
}

stopFuncionalidades.stop.onclick = () => {
    resetCountdown();
    clearTimeout(timerTimeOut);
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
    secondsDisplay.textContent = String(0).padStart(2, "0");
    playAudioButtonPress()
}

soundOnFuncionalidades.soundOn.onclick = () => {
    soundOnFuncionalidades.esconderBotaoSoundOn();
    soundOffFuncionalidades.aparecerBotaoSoundOff();
    bgAudio.pause();
}

soundOffFuncionalidades.soundOff.onclick = () => {
    soundOffFuncionalidades.esconderBotaoSoundOff();
    soundOnFuncionalidades.aparecerBotaoSoundOn();
    playAudioButtonPress()
    bgAudio.play();
}

setFuncionalidades.set.onclick = () => {
    setFuncionalidades.setarMinutos();
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
    playAudioButtonPress()
}