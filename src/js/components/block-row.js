const rowBtn = document.getElementById("row");
const columnBtn = document.getElementById("column");

const elementsToClassChange = [
  document.querySelectorAll(".shop__products-inner"),
  document.querySelectorAll(".product"),
  document.querySelectorAll(".product__image"),
  document.querySelectorAll(".product__data"),
  document.querySelectorAll(".product__naim"),
  document.querySelectorAll(".product__link"),
  document.querySelectorAll(".product__descr"),
  document.querySelectorAll(".product__info"),
  document.querySelectorAll(".product__price"),
  document.querySelectorAll(".product__control"),
];

const changeClassName = (type) => {
  elementsToClassChange.forEach((elements) =>
    elements.forEach((element) => {
      type === "row"
        ? element.classList.add(
            `${element.getAttribute("class").split(" ")[0]}--row`
          )
        : element.classList.remove(
            `${element.getAttribute("class").split(" ")[0]}--row`
          );
    })
  );
};

rowBtn?.addEventListener("click", (e) => {
  changeClassName("row");
});

columnBtn?.addEventListener("click", (e) => {
  changeClassName("column");
});

if (location.href.includes("page-shop")) changeClassName("row");
