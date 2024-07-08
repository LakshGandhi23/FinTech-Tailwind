// Nav scroll
function userScroll() {
  const navbar = document.querySelector('.navigation');
  const menuButton = document.querySelector(
    '[data-collapse-toggle="navbar-dropdown"]'
  );

  const handleScroll = () => {
    const scrolled = window.scrollY > 50;
    const isMenuOpen = menuButton.getAttribute('aria-expanded') === 'true';

    navbar.classList.toggle('navbar-sticky', scrolled);
    navbar.classList.toggle('py-4', !scrolled);
    navbar.classList.toggle('navbar-opaque', isMenuOpen && !scrolled);
  };

  window.addEventListener('scroll', handleScroll);

  const handleMenuClick = () => {
    const isMenuOpen = menuButton.getAttribute('aria-expanded') === 'true';
    navbar.classList.toggle('navbar-opaque', isMenuOpen);
  };

  navbar.addEventListener('click', handleMenuClick);

  handleScroll();
}

document.addEventListener('DOMContentLoaded', userScroll);

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
