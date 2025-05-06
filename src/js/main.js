//Boton Hamburguesa
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
  nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
});

//Recorro los links para que cierren el modal
const links = document.querySelectorAll(".link");

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("visible");
  });
});

//Carrusel de imagenes
//Loop para que funcionen ambos
document.querySelectorAll(".CarruselMain").forEach((CarruselMain) => {
  //Variables
  const ContenedorCarrusel = CarruselMain.querySelector(".ContenedorCarrusel");
  const imagenes = CarruselMain.querySelectorAll(".DivCarrusel");
  const Siguiente = CarruselMain.querySelector(".Siguiente");
  const Anterior = CarruselMain.querySelector(".Anterior");
  let currentIndex = 0;

  function actualizarCarrusel() {
    const width = CarruselMain.clientWidth;
    ContenedorCarrusel.style.transform = `translateX(-${
      currentIndex * width
    }px)`;
  }

  function SiguienteImagen() {
    currentIndex = (currentIndex + 1) % imagenes.length;
    actualizarCarrusel();
  }

  function AnteriorImagen() {
    currentIndex = (currentIndex - 1 + imagenes.length) % imagenes.length;
    actualizarCarrusel();
  }

  Siguiente.addEventListener("click", SiguienteImagen);
  Anterior.addEventListener("click", AnteriorImagen);

  window.addEventListener("resize", actualizarCarrusel);
  actualizarCarrusel();

  // Mover carrusel automaticamente
  let AutoMover = setInterval(SiguienteImagen, 5000);
  CarruselMain.addEventListener("mouseenter", () => clearInterval(AutoMover));
  CarruselMain.addEventListener("mouseleave", () => {
    AutoMover = setInterval(SiguienteImagen, 5000);
  });
});
