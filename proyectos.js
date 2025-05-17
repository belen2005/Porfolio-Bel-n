const proyectos = {
  brava: {
   titulo: "Brava",
    imagenes: ["img/brava.png"]
  },
  culpadel: {
     titulo: "CulPadel",
    imagenes: ["img/culpadel.png"]
  },
  ilumina: {
    titulo: "Ilumina",
    imagenes: ["img/ilumina.png"]
  },
  bakerykitchen: {
     titulo: "Bakery Kitchen",
    imagenes: ["img/bakey-kitchen.png"]
  },
  catalogo:{
    titulo: "Catálogo Tipográfico",
    imagenes: ["img/catalogo.png"]
  }
};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (proyectos[id]) {
  const proyecto = proyectos[id];
  const galeria = document.getElementById("galeria");

  proyecto.imagenes.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = proyecto.titulo;
    galeria.appendChild(img);
  });



  // NUEVO BLOQUE: Proyectos relacionados
  const proyectosRelacionados = {
    brava: {
      titulo: "Brava",
      imagen: "img/proyecto1.png"
    },
    culpadel: {
      titulo: "CulPadel",
      imagen: "img/proyecto2.png"
    },
    ilumina: {
      titulo: "Ilumina",
      imagen: "img/proyecto3.png"
    },
    bakerykitchen: {
      titulo: "Bakery Kitchen",
      imagen: "img/proyecto4.png"
    },
    catalogo: {
      titulo: "Cátalogo Tipográfico",
      imagen: "img/proyecto5.png"
    }
  };

  const relacionadosContainer = document.getElementById("relacionados-container");

  const relacionados = Object.entries(proyectosRelacionados)
    .filter(([key]) => key !== id)
    .slice(0, 2);

  relacionados.forEach(([relId, rel]) => {
    const card = document.createElement("div");
    card.className = "card-proyecto";
    card.innerHTML = `
      <img src="${rel.imagen}" alt="${rel.titulo}" />
      <h3>${rel.titulo}</h3>
      <a href="proyectos.html?id=${relId}">Ver más →</a>
    `;
    relacionadosContainer.appendChild(card);
  });

  document.title = proyecto.titulo;

} else {
  document.body.innerHTML = "<p>Proyecto no encontrado.</p>";
}