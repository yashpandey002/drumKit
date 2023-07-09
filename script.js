"use strict";

window.addEventListener("keydown", function (e) {
    const audio = document.querySelector(`audio[data-key=${e.code}]`);
    const key = document.querySelector(`.key[data-key="${e.code}"`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
});

const removeTransition = function (e) {
    // skip it if it's not a transform
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing");
};

const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
    key.addEventListener("transitionend", removeTransition);
});
