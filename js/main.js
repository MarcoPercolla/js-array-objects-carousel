const array2Immagini = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp",
]

let element2Immagini = "";
let elementMiniImmagini = "";

for (let i = 0; i < array2Immagini.length; i++) {
    const link2Immagine = array2Immagini[i];
    element2Immagini += `<img id="midWidth" class="wait wideMid" src="${link2Immagine}">`;
    elementMiniImmagini += `<img id="miniWidth" class="widemini miniWait" src="${link2Immagine}">`;

}
document.getElementById("carousel").innerHTML += element2Immagini;
document.getElementById("miniSide").innerHTML = elementMiniImmagini;

let current2Img = 0;
const images2 = document.querySelectorAll("#midWidth");
const miniature = document.querySelectorAll("#miniWidth");
images2[current2Img].classList.remove("wait");
images2[current2Img].classList.add("active");
miniature[current2Img].classList.remove("miniWait");
miniature[current2Img].classList.add("miniActive");

document.getElementById("nextBtn").addEventListener("click", function () {

    if (current2Img < images2.length - 1) {
        images2[current2Img].classList.remove("active");
        images2[current2Img].classList.add("wait");
        miniature[current2Img].classList.add("miniWait");
        miniature[current2Img].classList.remove("miniActive");
        current2Img++;
        images2[current2Img].classList.add("active");
        images2[current2Img].classList.remove("wait");
        miniature[current2Img].classList.remove("miniWait");
        miniature[current2Img].classList.add("miniActive");
    } else {
        images2[current2Img].classList.remove("active");
        images2[current2Img].classList.add("wait");
        miniature[current2Img].classList.add("miniWait");
        miniature[current2Img].classList.remove("miniActive");
        current2Img = (0);
        images2[current2Img].classList.add("active");
        images2[current2Img].classList.remove("wait");
        miniature[current2Img].classList.remove("miniWait");
        miniature[current2Img].classList.add("miniActive");

    }
});

document.getElementById("prevBtn").addEventListener("click", function () {

    if (current2Img > 0) {
        images2[current2Img].classList.remove("active");
        images2[current2Img].classList.add("wait");
        miniature[current2Img].classList.add("miniWait");
        miniature[current2Img].classList.remove("miniActive");
        current2Img--;
        images2[current2Img].classList.add("active");
        images2[current2Img].classList.remove("wait");
        miniature[current2Img].classList.remove("miniWait");
        miniature[current2Img].classList.add("miniActive");
    } else {
        images2[current2Img].classList.remove("active");
        images2[current2Img].classList.add("wait");
        miniature[current2Img].classList.add("miniWait");
        miniature[current2Img].classList.remove("miniActive");
        current2Img = (images2.length - 1);
        images2[current2Img].classList.add("active");
        images2[current2Img].classList.remove("wait");
        miniature[current2Img].classList.remove("miniWait");
        miniature[current2Img].classList.add("miniActive");
    }
});
