const catalogSubCategories = document.querySelectorAll(".sub-categories__list");
const catalogMainCategories = document.querySelectorAll(
  ".main-categories__item"
);
const catalogImages = document.querySelectorAll(".catalog__img");

const addClass = (element, className, index) => {
  element[index].classList.add(className);
};

catalogMainCategories.forEach((item, index) =>
  item.addEventListener("mouseover", () => {
    catalogSubCategories.forEach((item, index) => {
      item.classList.remove("show");
      catalogImages[index].classList.remove("show");
      catalogMainCategories[index].classList.remove("active");
    });
    addClass(catalogSubCategories, "show", index);
    addClass(catalogMainCategories, "active", index);
    addClass(catalogImages, "show", index);
  })
);
