const pintar = (color, object) => {
    object.style.backgroundColor = color
}

const add_box = (color) => {
    const new_object = document.createElement('div')
    new_object.style.backgroundColor = color
    new_object.className = "box"
    console.log(new_object)
    document.body.appendChild(new_object)
};

const key = document.getElementById("key")
const blue_box = document.getElementById("blue_box")
const red_box = document.getElementById("red_box")
const green_box = document.getElementById("green_box")
const yellow_box = document.getElementById("yellow_box")

blue_box.addEventListener('click', () => pintar("black", blue_box))
red_box.addEventListener('click', () => pintar("black", red_box))
green_box.addEventListener('click', () => pintar("black", green_box))
yellow_box.addEventListener('click', () => pintar("black", yellow_box))

document.addEventListener('keydown', function (event) {
    if (event.key === "a"){
        pintar("pink", key)
    } else if (event.key === "s"){
        pintar("orange", key)
    } else if (event.key === "d"){
        pintar("lightblue", key)
    } else if (event.key === "q"){
        add_box("purple")
    } else if (event.key === "w"){
        add_box("gray")
    } else if (event.key === "e"){
        add_box("brown")
    }
});