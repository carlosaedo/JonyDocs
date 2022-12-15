let scoreJogador = 0;
let scoreJonyDocs = 0;
let queixas = 0;

document.querySelector("#game").addEventListener("click", function () {
    let randomNumber1 = Math.floor(6 * Math.random()) + 1;
    let randomNumber2 = Math.floor(6 * Math.random()) + 1;
    // console.log(randomNumber);

    document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

    document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩Ganhas tu, malandro!";
        document.querySelector("h2").innerHTML = "Boa!! Já não tens de fazer a newsletter!!🗞️";
        scoreJogador++;
        document.querySelector("#jogador").innerHTML = `Tu: ${scoreJogador}`;
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "JonyDocs ganha!🚩";
        document.querySelector("h2").innerHTML = "Vais ter de apagar documentos!!😒";
        scoreJonyDocs++;
        document.querySelector("#jonyDocs").innerHTML = `JonyDocs: ${scoreJonyDocs}`;
    } else {
        document.querySelector("h1").innerHTML = "Empate!🥴";
        document.querySelector("h2").innerHTML = "JonyDocs foi aos RH apresentar queixa!!😤";
        scoreJogador++;
        scoreJonyDocs++;
        queixas++;
        document.querySelector("#jonyDocs").innerHTML = `JonyDocs: ${scoreJonyDocs}`;
        document.querySelector("#jogador").innerHTML = `Tu: ${scoreJogador}`;
        if (queixas < 5) {
            document.querySelector("#queixas").innerHTML = `Queixas nos RH: ${queixas}`;
        } else if (queixas >= 5 && queixas <= 10) {
            document.querySelector("#queixas").innerHTML = `Queixas nos RH: ${queixas} ...Bruh`;
        } else if (queixas >= 11 && queixas <= 20) {
            document.querySelector("#queixas").innerHTML = `Queixas nos RH: ${queixas} ...Bruh 👀`;
        } else {
            document.querySelector("#queixas").innerHTML = `Queixas nos RH: ${queixas} ...Bruh 🥴`;
        }
    }
});