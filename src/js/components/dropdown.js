const elements = [
  {
    button: document.querySelector(".header__phone-btn"),
    element: document.querySelector(".header__socials"),
  },
  {
    button: document.querySelector(".header__catalog-btn"),
    element: document.querySelector(".catalog"),
  },
];

const setDropDownAction = (elements, index) => {
  elements[index].button.addEventListener("click", () => {
    elements[index].element.classList.toggle("active");
  });
  window.addEventListener("click", (e) => {
    if (
      !(
        elements[index].element.contains(e.target) ||
        elements[index].button.contains(e.target)
      )
    ) {
      elements[index].element.classList.remove("active");
    }
  });
};

for (let i = 0; i < elements.length; i++) {
  setDropDownAction(elements, i);
}
