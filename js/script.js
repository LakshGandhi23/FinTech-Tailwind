// Nav scroll
function userScroll() {
  let hamburgerOpen = false;
  const navbar = document.querySelector('.navigation');
  const mobileMenu = document.getElementById('mobile-menu');

  const handleScroll = () => {
    const scrolled = window.scrollY > 50;
    navbar.classList.toggle('navbar-sticky', scrolled);
    navbar.classList.toggle('bg-transparent', !scrolled && !hamburgerOpen);
    navbar.classList.toggle('bg-white', scrolled || hamburgerOpen);
  };

  window.addEventListener('scroll', handleScroll);

  document.getElementById('hamburger').addEventListener('click', () => {
    hamburgerOpen = !hamburgerOpen;
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('block');
    handleScroll();
  });

  handleScroll(); // Initial call to set the correct state on page load
}

document.addEventListener('DOMContentLoaded', userScroll);

// dropdown menu

document.addEventListener('DOMContentLoaded', () => {
  // Dropdown toggles
  const aboutToggle = document.getElementById('about-toggle');
  const langToggle = document.getElementById('lang-toggle');

  aboutToggle.addEventListener('click', (e) => {
    e.preventDefault();
    const aboutDropdown = document.getElementById('about-menu');
    aboutDropdown.classList.toggle('open');
  });

  langToggle.addEventListener('click', (e) => {
    e.preventDefault();
    const langDropdown = document.getElementById('lang-menu');
    langDropdown.classList.toggle('open');
  });
});

// Video Modal
document.addEventListener('DOMContentLoaded', function () {
  const videoModalElement = document.getElementById('videoModal');
  const videoIframe = document.getElementById('video');
  const videoBtn = document.querySelector('.video-btn');

  const options = {
    onHide: () => {
      videoIframe.setAttribute('src', '');
    },
  };
  const modal = new Modal(videoModalElement, options);

  videoBtn.addEventListener('click', function () {
    const videoSrc = videoBtn.getAttribute('data-bs-src');
    videoIframe.setAttribute('src', videoSrc);
    modal.show();
  });

  videoModalElement.addEventListener('hidden.tw.modal', function () {
    videoIframe.setAttribute('src', '');
  });
});

// Wow and Odometer
new WOW({
  callback: function (box) {
    var odometerElement = box.querySelector('.odometer');
    if (odometerElement) {
      var odometerValue = odometerElement.getAttribute('data-odometer-final');
      odometerElement.innerHTML = odometerValue;
    }
  },
}).init();

// Slick Carousel
$(document).ready(function () {
  $('.testimonial-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  });
});
