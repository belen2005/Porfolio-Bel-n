/* // Animación al cargar
window.addEventListener('load', () => {
    document.querySelector('.titulo').style.opacity = '1';
    document.querySelector('.titulo').style.transform = 'translateY(0)';
    document.querySelector('.subtitulo').style.opacity = '1';
    document.querySelector('.subtitulo').style.transform = 'translateY(0)';
  });
  
  // Mostrar sección "Sobre mí" con animación al hacer scroll
  window.addEventListener('scroll', () => {
    const sobreMi = document.querySelector('.sobre-mi');
    const top = sobreMi.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
  
    if (top < windowHeight - 100) {
      sobreMi.classList.add('visible');
    }
  
    // Animar scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    scrollIndicator.style.height = progress + '%';
  });
 */




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
  const scrollAmount = 340; // ajustá este valor si querés más o menos desplazamiento
  carousel.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}

function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('active');
}