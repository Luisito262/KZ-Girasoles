// ==========================================
// BOTÓN VER MENÚ
// ==========================================

const btnMenu = document.getElementById("btnMenu");

if (btnMenu) {

    btnMenu.addEventListener("click", function () {

        // Evitar doble clic
        btnMenu.disabled = true;

        // Activar animación
        btnMenu.classList.add("cargando");

        // Cambiar texto
        const texto =
            btnMenu.querySelector(".texto-boton");

        if (texto) {

            texto.textContent = "Cargando...";

        }

        // Ir al menú
        setTimeout(function () {

            window.location.href = "menu.html";

        }, 1200);

    });

}



// ==========================================
// BOTÓN REGRESAR A HOME
// ==========================================

const btnRegresar =
    document.getElementById("btnRegresar");

if (btnRegresar) {

    btnRegresar.addEventListener(
        "click",
        function (evento) {

            // Evita cambiar de página inmediatamente
            evento.preventDefault();

            // Activar animación
            btnRegresar.classList.add("cargando");

            // Esperar la animación
            setTimeout(function () {

                window.location.href = "home.html";

            }, 800);

        }
    );

}