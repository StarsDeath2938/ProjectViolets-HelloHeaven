function fluxEndFunction() {

    for (let i = 0; i < allFlux.length; i++) {
        allFlux[i].style.backgroundColor = "rgba(188,210,238,0.7)";
        allFlux[i].style.boxShadow = "0px 0px 100px 10px rgba(188,210,238,0.3)";
    }

    fluxLeft.style.backgroundColor = "rgba(188,210,238,0.7)";
    fluxLeft.style.boxShadow = "0px 0px 100px 10px rgba(188,210,238,0.3)";

}

let flux = document.querySelector('.flux-loading');
let allFlux = document.querySelectorAll('.flux-loading');

let fluxLeft = document.querySelector('.flux-loading-right');
// let fluxLoading = document.querySelectorAll('flux-loading')

flux.addEventListener("animationend", fluxEndFunction);