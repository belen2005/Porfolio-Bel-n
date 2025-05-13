const proyectos = {
  brava: {
    imagenes: ["img/brava1.png", "img/brava2.png", "img/brava3.png"]
  },
  culpadel: {
    imagenes: ["img/culpadel.png"]
  },
  ilumina: {
    imagenes: ["img/ilumina.png"]
  }
};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (proyectos[id]) {
  const proyecto = proyectos[id];
  document.getElementById("titulo").textContent = proyecto.titulo;
  document.getElementById("descripcion").textContent = proyecto.descripcion;

  const galeria = document.getElementById("galeria");

  proyecto.imagenes.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = proyecto.titulo;
    galeria.appendChild(img);
  });

  // Si no hay link, ocultarlo
  const link = document.getElementById("link");
  if (proyecto.link) {
    link.href = proyecto.link;
  } else {
    link.style.display = "none";
  }

} else {
  document.body.innerHTML = "<p>Proyecto no encontrado.</p>";
}