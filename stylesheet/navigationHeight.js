const navigationHeight = document.querySelector('.sticky').offsetHeight;

document.documentElement.style.setProperty('--scroll-padding', navigationHeight - 1 + "px");