const scrollContainer = document.getElementById('scroll-container');
scrollContainer.addEventListener('scroll', () => {
  const scrollIndicator = document.querySelector('.scroll-indicator');
  const scrollTop = scrollContainer.scrollTop;
  const scrollHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight;
  const progress = (scrollTop / scrollHeight) * 100;
  scrollIndicator.style.height = progress + '%';
});

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function scrollCarousel(direction) {
  const carousel = document.getElementById("carousel");
  const scrollAmount = 340;
  carousel.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}

function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('active');
}

const form = document.getElementById('formulario-contacto');

form.addEventListener('submit', function (e) {
  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const nombreValido = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]{2,50}$/.test(nombre);
  const correoValido = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(correo);

  if (!nombreValido) {
    alert('Por favor, ingresá un nombre válido.');
    e.preventDefault();
    return;
  }

  if (!correoValido) {
    alert('Por favor, ingresá un correo electrónico válido.');
    e.preventDefault();
    return;
  }
});


