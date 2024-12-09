function pintar(color, objeto) {
    objeto.style.backgroundColor = color
}

const ele = document.getElementById("ele1")

pintar("green", ele);

ele.addEventListener('click', () => pintar("yellow", ele))