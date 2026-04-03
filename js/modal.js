
document.addEventListener("DOMContentLoaded", () => {

  const modal = document.getElementById("modal");
  const modalBox = document.getElementById("modalBox");
  const openBtn = document.getElementById("openModal");
  const closeBtn = document.getElementById("closeModal");

  openBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
    modal.classList.add("flex");

    setTimeout(() => {
      modalBox.classList.remove("scale-95", "opacity-0");
      modalBox.classList.add("scale-100", "opacity-100");
    }, 10);
  });

  function closeModal() {
    modalBox.classList.add("scale-95", "opacity-0");

    setTimeout(() => {
      modal.classList.add("hidden");
    }, 200);
  }

  closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

});



document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("toTop");

  // Mostrar botão ao rolar
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      btn.classList.remove("opacity-0", "pointer-events-none");
      btn.classList.add("opacity-100");
    } else {
      btn.classList.add("opacity-0", "pointer-events-none");
    }
  });

  // Voltar ao topo
  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

});
