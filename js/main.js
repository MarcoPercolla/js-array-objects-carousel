const arrayImmagini = [
    { immagine: "img/01.webp", titolo: "SpiderMan", descrizione: "da grandi poteri blablabla" },
    { immagine: "img/02.webp", titolo: "immagine n2", descrizione: "blablablablablsbls" },
    { immagine: "img/03.webp", titolo: "immagine n3", descrizione: "blablablablablsbls" },
    { immagine: "img/04.webp", titolo: "immagine n4", descrizione: "blablablablablsbls" },
    { immagine: "img/05.webp", titolo: "immagine n5", descrizione: "blablablablablsbls" },
]
let avanti;
let indietro;
let counter = 0;
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
mostraCorrente();

// bottone per andare avanti
document.getElementById("nextBtn").addEventListener("click", function () {

    scorriInfinito();

});
// bottone per andare indietro
document.getElementById("prevBtn").addEventListener("click", function () {

    scorriInfinitoindietro();
});

// click su ogni miniatura per selezionare immagine
miniature.forEach((element, index, array) => {
    element.addEventListener("click", function () {
        console.log("ok");
        nascondiCorrente();
        currentImg = index;
        mostraCorrente();

    })
});

document.getElementById("playBtn").addEventListener("click", function () {
    
   play();

});
document.getElementById("stopBtn").addEventListener("click", function () {
    
    stop();

});

document.getElementById("rewBtn").addEventListener("click", function () {
    
    rewind();

});



// --------------- funzioni
function play() {
    if (counter == 0) {
        counter = 1;
        avanti = setInterval(scorriInfinito, 1000);
        avanti;
    }
    
    
};
function stop() {
    
    counter = 0;
    clearInterval(avanti);
    clearInterval(indietro);
    
};
function rewind() {
    if (counter == 0) {
        counter=1;
        indietro = setInterval(scorriInfinitoindietro, 1000);
    }
    
    
};
    

function mostraCorrente() {

    images2[currentImg].classList.add("active");
    images2[currentImg].classList.remove("wait");
    miniature[currentImg].classList.remove("miniWait");
    miniature[currentImg].classList.add("miniActive");
    imagesDesctription[currentImg].classList.remove("wait");
    imagesDesctription[currentImg].classList.add("active");

};

function nascondiCorrente() {


    images2[currentImg].classList.remove("active");
    images2[currentImg].classList.add("wait");
    miniature[currentImg].classList.add("miniWait");
    miniature[currentImg].classList.remove("miniActive");
    imagesDesctription[currentImg].classList.add("wait");
    imagesDesctription[currentImg].classList.remove("active");


};

function scorriIndietro() {


    nascondiCorrente();
    currentImg--;
    mostraCorrente();


};

function scorriIndietroRewind() {


    nascondiCorrente();
    currentImg = (images2.length - 1);
    mostraCorrente();


};

function scorriAvanti() {


    nascondiCorrente();
    currentImg++;
    mostraCorrente();


};

function scorriAvantiRewind() {


    nascondiCorrente();
    currentImg = (0);
    mostraCorrente();


};

function scorriInfinito() {

    if (currentImg < images2.length - 1) {
        scorriAvanti();
    } else {
        scorriAvantiRewind();
    }

};

function scorriInfinitoindietro() {


    if (currentImg > 0) {
        scorriIndietro();
    } else {
        scorriIndietroRewind();
    }


};