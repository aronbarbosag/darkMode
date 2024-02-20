export default function scrollSuave() {}
const linksInternos = document.querySelectorAll('#nav a[href^="#"]');

function scrollToView(event) {
  event.preventDefault();
  const href = event.target.getAttribute('href');
  const section = document.querySelector(href);
  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

linksInternos.forEach((link) => {
  link.addEventListener('click', scrollToView);
  link.scroll;
});
