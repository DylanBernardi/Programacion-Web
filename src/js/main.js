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
    ContenedorCarrusel.style.transform = `translateX(-${currentIndex * width
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

const toggleThemeBtn = document.getElementById("toggle-theme");

function updateThemeIcon() {
  if (document.body.classList.contains("light-mode")) {
    toggleThemeBtn.textContent = "🌙"; // Ícono de luna para modo claro
  } else {
    toggleThemeBtn.textContent = "🌞"; // Ícono de sol para modo oscuro
  }
}

toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  localStorage.setItem("theme", document.body.classList.contains("light-mode") ? "light" : "dark");
  updateThemeIcon(); // Actualizar el icono después del cambio
});

// Mantener el tema e icono seleccionado al recargar la página
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
  updateThemeIcon();
}