const arrayImmagini = [
    { immagine: "img/01.webp", titolo: "SpiderMan", descrizione: "da grandi poteri blablabla" },
    { immagine: "img/02.webp", titolo: "immagine n2", descrizione: "blablablablablsbls" },
    { immagine: "img/03.webp", titolo: "immagine n3", descrizione: "blablablablablsbls" },
    { immagine: "img/04.webp", titolo: "immagine n4", descrizione: "blablablablablsbls" },
    { immagine: "img/05.webp", titolo: "immagine n5", descrizione: "blablablablablsbls" },
]
// immagine principale
let elementImmagini = "";
// miniatura a destra
let elementMiniImmagini = "";

// utilizzando un forEach ciclo l'array di oggetti e ne tiro fuori i valori che mi servono
arrayImmagini.forEach((element, index, array) => {
    console.log(index, element.immagine);
    const linkImmagine = element.immagine;
    elementImmagini += `<img id="midWidth" class="wait wideMid" src="${linkImmagine}"><div id="description" class="wait"><h2">${element.titolo}</h2><h3>${element.descrizione}</h3></div>`;
    elementMiniImmagini += `<img id="miniWidth" class="widemini miniWait" src="${linkImmagine}">`;
});
document.getElementById("carousel").innerHTML += elementImmagini;
document.getElementById("miniSide").innerHTML = elementMiniImmagini;

// setto un valore iniziale 0 da associare all'immagine corrente da utilizzare piu tardi per seguire l'immagine corrente con valori tra 0 e array.lenght
let currentImg = 0;
const images2 = document.querySelectorAll("#midWidth");
const miniature = document.querySelectorAll("#miniWidth");
const imagesDesctription = document.querySelectorAll("#description");



// inizializza le classi iniziali per i vari elementi
settaClassi();

// bottone per andare avanti
document.getElementById("nextBtn").addEventListener("click", function () {

    if (currentImg < images2.length - 1) {
        scorriAvanti();

    } else {
        scorriAvantiRewind();

    }
});
// bottone per andare indietro
document.getElementById("prevBtn").addEventListener("click", function () {

    if (currentImg > 0) {
        scorriIndietro();
    } else {
        scorriIndietroRewind();
    }
});
miniature.forEach((element, index, array) => {
    element.addEventListener("click", function (){
        console.log("ok");
    })
});

// --------------- funzioni

function scorriIndietro() {


    images2[currentImg].classList.remove("active");
    images2[currentImg].classList.add("wait");
    miniature[currentImg].classList.add("miniWait");
    miniature[currentImg].classList.remove("miniActive");
    imagesDesctription[currentImg].classList.add("wait");
    imagesDesctription[currentImg].classList.remove("active");
    currentImg--;
    images2[currentImg].classList.add("active");
    images2[currentImg].classList.remove("wait");
    miniature[currentImg].classList.remove("miniWait");
    miniature[currentImg].classList.add("miniActive");
    imagesDesctription[currentImg].classList.remove("wait");
    imagesDesctription[currentImg].classList.add("active");


};

function scorriIndietroRewind() {


    images2[currentImg].classList.remove("active");
    images2[currentImg].classList.add("wait");
    miniature[currentImg].classList.add("miniWait");
    miniature[currentImg].classList.remove("miniActive");
    imagesDesctription[currentImg].classList.add("wait");
    imagesDesctription[currentImg].classList.remove("active");
    currentImg = (images2.length - 1);
    images2[currentImg].classList.add("active");
    images2[currentImg].classList.remove("wait");
    miniature[currentImg].classList.remove("miniWait");
    miniature[currentImg].classList.add("miniActive");
    imagesDesctription[currentImg].classList.remove("wait");
    imagesDesctription[currentImg].classList.add("active");


};

function scorriAvanti() {


    images2[currentImg].classList.remove("active");
    images2[currentImg].classList.add("wait");
    miniature[currentImg].classList.add("miniWait");
    miniature[currentImg].classList.remove("miniActive");
    imagesDesctription[currentImg].classList.add("wait");
    imagesDesctription[currentImg].classList.remove("active");
    currentImg++;
    images2[currentImg].classList.add("active");
    images2[currentImg].classList.remove("wait");
    miniature[currentImg].classList.remove("miniWait");
    miniature[currentImg].classList.add("miniActive");
    imagesDesctription[currentImg].classList.remove("wait");
    imagesDesctription[currentImg].classList.add("active");


};

function scorriAvantiRewind() {


    images2[currentImg].classList.remove("active");
    images2[currentImg].classList.add("wait");
    miniature[currentImg].classList.add("miniWait");
    miniature[currentImg].classList.remove("miniActive");
    imagesDesctription[currentImg].classList.add("wait");
    imagesDesctription[currentImg].classList.remove("active");
    currentImg = (0);
    images2[currentImg].classList.add("active");
    images2[currentImg].classList.remove("wait");
    miniature[currentImg].classList.remove("miniWait");
    miniature[currentImg].classList.add("miniActive");
    imagesDesctription[currentImg].classList.remove("wait");
    imagesDesctription[currentImg].classList.add("active");


};

function settaClassi() {


    images2[currentImg].classList.remove("wait");
    images2[currentImg].classList.add("active");
    miniature[currentImg].classList.remove("miniWait");
    miniature[currentImg].classList.add("miniActive");
    imagesDesctription[currentImg].classList.remove("wait");
    imagesDesctription[currentImg].classList.add("active");


};