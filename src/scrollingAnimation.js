const navLinks = document.querySelectorAll('.navigation a[href^="#"]');

//função para pegar o id do elemento
function getDistance(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

//animation scroll
function nativeScroll(distance) {
  window.scroll({
    top: distance,
    behavior: "smooth",
  });
}

//função para verficar a distancia entre o usuário e o elemento para que seja enviado adequadamente a sessão selecionada
function scrollSection(event) {
  event.preventDefault();
  const distance = getDistance(event.target) - 90;
  nativeScroll(distance);
  const element = event.target;
  const id = element.getAttribute("href");
  const section = document.querySelector(id);
  console.log(section.offsetTop);
}

navLinks.forEach((link) => {
  link.addEventListener("click", scrollSection);
});
