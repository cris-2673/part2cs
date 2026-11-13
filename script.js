
document.addEventListener("DOMContentLoaded", function () {

    // BUSCAR LOS ELEMENTOS DEL BOTÓN

    const boton = document.getElementById("conclusionBtn");
    const mensaje = document.getElementById("conclusion");


    // FUNCIONALIDAD DEL BOTÓN

    if (boton && mensaje) {

        boton.addEventListener("click", function () {

            // Comprobar si el mensaje está oculto
            const estaOculto = mensaje.classList.contains("hidden");

            if (estaOculto) {

                // MOSTRAR CONCLUSIÓN
                mensaje.classList.remove("hidden");

                boton.textContent = "Ocultar conclusión ↑";

            } else {

                // OCULTAR CONCLUSIÓN
                mensaje.classList.add("hidden");

                boton.textContent = "Ver conclusión ✨";

            }

        });

    }


    // ANIMACIONES DE LAS TARJETAS

    const tarjetas = document.querySelectorAll(
        ".card, .program-item"
    );

    if ("IntersectionObserver" in window) {

        const observador = new IntersectionObserver(function (entradas) {

            entradas.forEach(function (entrada) {

                if (entrada.isIntersecting) {

                    entrada.target.classList.add("visible");

                    observador.unobserve(entrada.target);

                }

            });

        }, {
            threshold: 0.15
        });

        tarjetas.forEach(function (tarjeta) {

            tarjeta.classList.add("animate");

            observador.observe(tarjeta);

        });

    } else {

        tarjetas.forEach(function (tarjeta) {

            tarjeta.classList.add("visible");

        });

    }

});
