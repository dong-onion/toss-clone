const $container = document.querySelector('.container');
const $containerBefore = document.querySelector('.before-container');
const font = document.querySelectorAll('.nav-link');
const navbar = document.querySelector('.navbar');
const $logo = document.querySelector('.logo');
const $spanMain = document.querySelector('.main-text');
const $span1 = document.querySelector('.span1');
const $span2 = document.querySelector('.span2');
const $span3 = document.querySelector('.span3');

const fontArray = Array.from(font);

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 20) {
    $spanMain.style.opacity = 1 - window.pageYOffset / 800;
  } else {
    $spanMain.style.opacity = 1;
  }
  if (800 < window.pageYOffset && window.pageYOffset < 2000) {
    $span1.style.opacity = (window.pageYOffset - 800) / 1200;
    $span1.style.transform = `translateY(${
      -0.1 * (window.pageYOffset - 1000)
    }%)`;
  }

  if (2000 < window.pageYOffset && window.pageYOffset < 3200) {
    $span2.style.opacity = (window.pageYOffset - 2000) / 1200;
    $span2.style.transform = `translateY(${
      -0.1 * (window.pageYOffset - 2200)
    }%)`;
  }
  if (3200 < window.pageYOffset && window.pageYOffset < 4400) {
    $span3.style.opacity = (window.pageYOffset - 3200) / 1200;
    $span3.style.transform = `translateY(${
      -0.1 * (window.pageYOffset - 3800)
    }%)`;
  }

  if (window.pageYOffset < 4400) {
    $containerBefore.style.transform = `scale(${
      1 + window.pageYOffset / 8800
    })`;
  }
  if (800 < window.pageYOffset && window.pageYOffset < 4400) {
    $containerBefore.style.filter = `brightness(${
      (4400 - window.pageYOffset) / 40
    }% )`;
  }
  if (window.pageYOffset > 4400 && window.pageYOffset < 4900) {
    $containerBefore.style.opacity = 1 - (window.pageYOffset - 4400) / 500;
  }
  if (window.pageYOffset > 4900) {
    $containerBefore.style.display = 'none';
    $container.style.display = 'none';
    $logo.src = './images/logo-toss-blue.png';
    navbar.style.backgroundColor = 'white';
    navbar.style.borderBottom = '1px solid';
    fontArray.forEach(font => {
      font.style.color = '#4e5968';
    });
  } else {
    $containerBefore.style.display = 'block';
    $container.style.display = 'flex';
    $logo.src = './images/logo-toss-white.png';
    navbar.style.backgroundColor = 'transparent';
    navbar.style.borderBottom = 'none';
    fontArray.forEach(font => {
      font.style.color = '#FFF';
    });
  }
});
