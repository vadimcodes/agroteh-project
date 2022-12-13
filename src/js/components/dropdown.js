const elements = [
  {
    button: document.querySelector(".header__phone-btn"),
    element: document.querySelector(".header__socials"),
    wrapper: document.querySelector(".header__socials"),
  },
  {
    button: document.querySelector(".header__catalog-btn"),
    element: document.querySelector(".catalog"),
    wrapper: document.querySelector(".catalog__wrapper"),
    disableScroll: true,
  },
];

const setDropDownAction = (elements, index) => {
  elements[index].button.addEventListener("click", () => {
    elements[index].element.classList.toggle("active");
    if (elements[index]?.disableScroll) {
      document.body.classList.add("dis-scroll");
    }
  });
  window.addEventListener("click", (e) => {
    if (
      !(
        elements[index].wrapper.contains(e.target) ||
        elements[index].button.contains(e.target)
      )
    ) {
      elements[index].element.classList.remove("active");
    }
    if (elements[index].element.getAttribute("class") === "catalog") {
      document.body.classList.remove("dis-scroll");
    }
  });
};

for (let i = 0; i < elements.length; i++) {
  setDropDownAction(elements, i);
}
