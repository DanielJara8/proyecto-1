/*prueba de enlace de documentos*/
console.log("Prueba de carga");

/*Agregado de eventos de botón menú */

        window.addEventListener("DOMContentLoaded", (event) => {
            console.log("DOM cargado");

            const menuBtn = document.getElementById("menu");
            const nav = document.querySelector("header nav");

            menuBtn.addEventListener("click", (event) =>{
                menuBtn.classList.toggle("salir");
                nav.classList.toggle("visualizar");
            });
           console.log("DOM cargado");
            
        });

    