const sitios = document.querySelectorAll(".sitio");
const botones = document.querySelectorAll(".boton");

let sitioActivo = 1;

function cambiarSitio(numSitio) {
    sitios.forEach(sitio => sitio.classList.remove("activo"));
    botones.forEach(boton => boton.classList.remove("activo"));
    sitioActivo = numSitio;
    sitios[sitioActivo - 1].classList.add("activo");
    botones[sitioActivo - 1].classList.add("activo");
}

botones.forEach((boton, index) => {
    boton.textContent = index + 1;
    boton.addEventListener("click", () => {
        cambiarSitio(index + 1);
    });
});

cambiarSitio(sitioActivo);

