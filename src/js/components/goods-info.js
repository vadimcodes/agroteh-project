const goodInfo = document.getElementById("good-info");
const infoBlock = document.querySelector(".goods-descr__block--hide");
const infoBtn = document.createElement("button");
const goodDescrItems = document.querySelectorAll("[data-item]");

infoBtn.innerHTML = "Показать все";
infoBtn.classList.add(
  "btn-reset",
  "goods-descr__all-btn",
  "goods-descr__all-btn--hide"
);

if (goodDescrItems.length >= 8) {
  infoBlock.insertAdjacentElement("afterbegin", infoBtn);
}

infoBtn?.addEventListener("click", (e) => {
  infoBtn.classList.remove(
    `${infoBtn.getAttribute("class").split(" ")[1]}--hide`
  );
  goodInfo.classList.remove(
    `${goodInfo.getAttribute("class").split(" ")[0]}--hide`
  );
});
