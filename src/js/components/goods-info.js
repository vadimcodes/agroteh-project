const infoBlock = document.getElementById("good-info");
const infoBtn = document.querySelector(".goods-descr__all-btn");

infoBtn?.addEventListener("click", (e) => {
  infoBtn.classList.remove(
    `${infoBtn.getAttribute("class").split(" ")[1]}--hide`
  );
  infoBlock.classList.remove(
    `${infoBlock.getAttribute("class").split(" ")[0]}--hide`
  );
});
