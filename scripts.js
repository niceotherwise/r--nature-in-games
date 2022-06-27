function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
} 

function randoBg() {
    console.log("baaaa!");
    let divs = document.getElementsByClassName("js-bg");
    let bgs = [1,2,3,4,5,6,7,8,9];

    for (let i = 0; i < divs.length; i++) {
        let num = randomNumber(1, bgs.length);
        divs[i].style.backgroundImage = "url('imgs/forests/forest-" + bgs[num] + ".jpg')";
        bgs.splice(num, 1);
        //console.log("computer says " + bgs + num);
  }
}

window.addEventListener('DOMContentLoaded', (event) => {
    randoBg();
});