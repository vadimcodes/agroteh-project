const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
const orderBlock = document.getElementById("orderDetail");
const orderButton = document.querySelector(".order-info__wrapped");
const deliveryBlock = document.getElementById("deliveryBlock");
const deliveryInputs = document.querySelectorAll(".order-delivery__input");

orderButton?.addEventListener("click", (e) => {
  orderBlock.classList.toggle("active");
  e.currentTarget.classList.toggle("active");
});

cartItems.forEach(({ name }, index) => {
  orderBlock?.insertAdjacentHTML(
    "beforeend",
    `<li class="order-info__item">
    ${index + 1}. ${name}
  </li>`
  );
});

deliveryInputs.forEach((input) => {
  input.id === "deliveryInput" ? deliveryBlock.classList.add("active") : "";
  input.addEventListener("input", (e) => {
    if (e.currentTarget.id === "deliveryInput") {
      deliveryBlock.classList.add("active");
    } else {
      deliveryBlock.classList.remove("active");
    }
  });
});
