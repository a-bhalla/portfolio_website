const navAnimate = document.getElementById('nav-icon');
const navLinks = document.querySelectorAll('.navbar-items');
const navToggle = document.querySelector('.nav-toggle');
const select = document.querySelector('.glide');
const scrollBtn = document.getElementById('btn-top');
const scrollAnimations = sal();

// Hamburger menu animation
animate = () => {
  navAnimate.classList.toggle('open');
}

navAnimate.addEventListener('click', animate);

// Hamburger menu expansion
menuToggle = () => {
  navLinks.forEach(nav => nav.classList.toggle('nav-toggle'));
}

navToggle.addEventListener('click', menuToggle);

// Glide.js
const glide = new Glide('.glide', {
  type: select.value,
  focusAt: 'center',
  gap: 20,
  perView: 3,
  breakpoints: {
    855: {
      perView: 2
    }
  }
});

select.addEventListener('change', e => {
  glide.update({
    type: e.target.value
  })
})

glide.mount();

// Scroll to top button
window.onscroll = () => {
  scrollFunction();
}

// When the user scrolls down 45px from top, show button
scrollFunction = () => {
  document.body.scrollTop > 45 || document.documentElement.scrollTop > 45 ? scrollBtn.style.display = 'block' : scrollBtn.style.display = 'none'
}

scrollBtn.addEventListener('click', () => {
  // For Safari
  document.body.scrollTop = 0;
  // For other browsers
  document.documentElement.scrollTop = 0;
});
