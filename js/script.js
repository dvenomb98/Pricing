let checkbox = document.querySelector("#myCheck")
let cena = document.querySelectorAll(".cena")
let slider = document.querySelector(".slider")




console.log(cena)


checkbox.addEventListener("change", function(event){

    if (event.target.checked === true) {
        cena[0].lastChild.nodeValue = "19.99"
        cena[1].lastChild.nodeValue = "24.99"
        cena[2].lastChild.nodeValue = "39.99"
        slider.style.opacity = "0.5"

    }
    else if (event.target.checked === false) {
        cena[0].lastChild.nodeValue = "199.99"
        cena[1].lastChild.nodeValue = "249.99"
        cena[2].lastChild.nodeValue = "399.99"
        slider.style.opacity = "1"
    }
})

// LOCAL STORAGE

function save() {
    localStorage.setItem("checkbox1", checkbox.checked);
    }
    //for loading.
    var checked = JSON.parse(localStorage.getItem("checkbox1"));
    checkbox.checked = checked;









