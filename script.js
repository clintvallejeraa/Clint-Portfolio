// Smooth Scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // Pugngan ang kalit nga "jump"

    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      // Kini ang mopa-scroll sa screen paingon sa About
      targetSection.scrollIntoView({
        behavior: 'smooth', // Hamis ang dagan
        block: 'start'      // I-sakto sa taas sa screen
      });
    }
  });
});