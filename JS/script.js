
     AOS.init({
     duration: 1000, // durée des animations en ms
     once: true      // animation une seule fois
     });


  // menu  burger
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('nav ul');
  const navLinks = document.querySelectorAll('nav a');

  // Ouvrir / fermer le menu quand on clique sur le burger
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });

  // Fermer le menu quand on clique sur un lien
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('show');
    });
  });
