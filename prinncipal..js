document.addEventListener('DOMContentLoaded', function () {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');
  
    tabLinks.forEach(link => {
      link.addEventListener('click', function (event) {
        event.preventDefault();
  
        const targetTab = this.getAttribute('data-tab');
  
        // Ocultar todas las secciones
        tabContents.forEach(content => {
          content.classList.remove('active');
        });
  
        // Mostrar la sección seleccionada
        const selectedTab = document.getElementById(targetTab);
        selectedTab.classList.add('active');
      });
    });
  });
  
// Seleccionar el ícono de menú y el menú
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// Añadir un evento click para mostrar/ocultar el menú
menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

