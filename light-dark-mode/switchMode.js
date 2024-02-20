export default function switchMode() {
  const btnSwitchMode = document.querySelector('input[type="checkbox"]');
  const html = document.documentElement;
  const nav = document.querySelector('nav');
  const toggleIcon = document.getElementById('toggle-icon');
  const image1 = document.getElementById('image1');
  const image2 = document.getElementById('image2');
  const image3 = document.getElementById('image3');
  const textoArea = document.getElementById('text-box');
  const dark = 1;
  const light = 0;
  function imgChange(color) {
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
  }

  function switchTheme(theme) {
    nav.style.backgroundColor = theme
      ? ' rgb(0 0 0 / 50%)'
      : ' rgb(255 255 255 / 50%)';
    toggleIcon.children[0].innerHTML = theme ? 'Dark Mode' : 'Light Mode';
    theme
      ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
      : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');

    theme ? imgChange('dark') : imgChange('light');
    textoArea.style.color = theme
      ? ' rgb(255 255 255 / 90%)'
      : ' rgb(0 0 0 / 90%)';
  }

  function switchMode(event) {
    if (event.target.checked) {
      html.setAttribute('data-theme', 'dark');
      switchTheme(dark);
      localStorage.setItem('theme', 'dark');
    } else {
      html.setAttribute('data-theme', 'light');
      switchTheme(light);
      localStorage.setItem('theme', 'light');
    }
  }
  btnSwitchMode.addEventListener('change', switchMode);
  const currentStorage = localStorage.getItem('theme');
  if (currentStorage === 'dark') {
    btnSwitchMode.checked = true;
    html.setAttribute('data-theme', 'dark');
    switchTheme(dark);
  } else if (currentStorage === 'light') {
    btnSwitchMode.checked = false;
    html.setAttribute('data-theme', 'light');
    switchTheme(light);
  }
  console.log(currentStorage);
}
