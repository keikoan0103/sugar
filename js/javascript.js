let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000); // 4秒ごとに切り替え
}

const menuBtn = document.getElementById('menu-btn');
  const navMenu = document.querySelector('.nav-menu ul');

  menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });

