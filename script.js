document.addEventListener("DOMContentLoaded", () => {
  const sobre = document.querySelector("#sobre");
  const btnAbrir = document.querySelector("#Abrir");
  const btnCerrar = document.querySelector("#Cerrar");
  const lluvia = document.querySelector("#lluvia");

  // Un solo punto de control para el estado de la carta
  function establecerEstado(abierto) {
    sobre.classList.toggle("abierto", abierto);
    document.body.classList.toggle("abierto", abierto);
    sobre.setAttribute("aria-expanded", String(abierto));
    sobre.setAttribute("aria-label", abierto ? "Cerrar la carta" : "Abrir la carta");
    btnAbrir.disabled = abierto;
    btnCerrar.disabled = !abierto;
  }

  const abrir = () => establecerEstado(true);
  const cerrar = () => establecerEstado(false);

  btnAbrir.addEventListener("click", abrir);
  btnCerrar.addEventListener("click", cerrar);

  // Click en el sobre: solo abre (cerrar se hace con el botón)
  sobre.addEventListener("click", () => {
    if (!sobre.classList.contains("abierto")) abrir();
  });

  // Teclado: Enter o espacio alternan el sobre
  sobre.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      establecerEstado(!sobre.classList.contains("abierto"));
    }
  });

  // Lluvia melancólica de fondo
  const totalGotas = 50;
  const fragmento = document.createDocumentFragment();

  for (let i = 0; i < totalGotas; i++) {
    const gota = document.createElement("div");
    gota.className = "gota";
    gota.style.left = Math.random() * 100 + "vw";
    gota.style.animationDuration = Math.random() * 2 + 3 + "s"; // 3 a 5 s
    gota.style.animationDelay = Math.random() * 5 + "s";
    fragmento.appendChild(gota);
  }

  lluvia.appendChild(fragmento);
});
