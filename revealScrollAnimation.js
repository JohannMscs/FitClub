window.addEventListener("scroll", () => {
  const reveals = document.querySelectorAll(".reveal");

  //função para pegar o valor height do usuário e o height e a posição do item animmado
  reveals.forEach((rev) => {
    const windowHeight = window.innerHeight;
    const revTop = rev.getBoundingClientRect().top;

    //verificação para chamar as sessões animadas e retorna-lá ao lugar original quando for 'active'
    if (revTop < windowHeight - 100) {
      rev.classList.add("active");
    } else {
      rev.classList.remove("active");
    }
  });
});
