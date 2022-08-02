let puntaje
puntaje = 0

function evento() {
    puntaje++;
    let marginAlea = (Math.random()*800)
    let marginAlea2 = (Math.random()*700)
    let marginAlea3 = (Math.random()*700)
    let marginAlea4 = (Math.random()*800)
    button.style.marginLeft = marginAlea + "px";
    button.style.marginTop = marginAlea2 + "px";
    button.style.marginBottom = marginAlea3 + "px";
    button.style.marginRight = marginAlea4 + "px";

}
function calculoPuntos() {
    document.getElementById("score").innerHTML = puntaje;
    if (puntaje == 8) {
        alert("Felicidades, alcanzaste la puntuación máxima")
    }
}

calculoPuntos()
