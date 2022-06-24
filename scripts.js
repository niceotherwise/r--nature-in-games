function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
} 

function randoBg() {
    console.log("baaaa!");
    let divs = document.getElementsByClassName("js-bg");
    let bgs = 9;

    for (let i = 0; i < divs.length; i++) {
        let num = randomNumber(1, bgs);
        divs[i].style.backgroundImage = "url('imgs/forests/forest-" + num + ".jpg')";
        console.log("computer says " + num);
  }
}

window.addEventListener('DOMContentLoaded', (event) => {
    randoBg();
});