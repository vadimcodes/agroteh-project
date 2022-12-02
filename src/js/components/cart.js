const cartBtns = document.querySelectorAll(".btn-card");
const productNames = document.querySelectorAll(".product__link");
const productPrices = document.querySelectorAll(".product-price__current");
const productCounts = document.querySelectorAll(".stepper__input");
const productImages = document.querySelectorAll(
  `.image-switch__item[data-index*="0"] source`
);

const plusBtns = document.querySelectorAll("[data-action='plus']");
const minusBtns = document.querySelectorAll("[data-action='minus']");
const countInputs = document.querySelectorAll(".stepper__input");

const cartContainer = document.querySelector(".cart__inner");
const orderCount = document.querySelector("#orderCount");
const orderTotal = document.querySelector("#orderTotal > span");

const headerCartQuantity = document.querySelector(".header__cart-quantity");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// функция рендера кол-ва товаров в хедере

const renderCartQuantity = () => {
  if (cart.length) {
    headerCartQuantity.classList.add("active");
    headerCartQuantity.innerHTML = cart.length;
  } else {
    headerCartQuantity.classList.remove("active");
  }
};

// функционал добавления товаров в корзину в каталоге

cartBtns.forEach((btn, index) =>
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    e.currentTarget.classList.add("product__btn--active");
    const product = {
      id: index,
      name: productNames[index].innerText,
      price: parseInt(productPrices[index].innerText.replace(/ /g, "")),
      count: parseInt(productCounts[index].value),
      img: productImages[index].getAttribute("srcset"),
    };
    const inCartProduct = cart.find((item) => item.id === index);
    if (inCartProduct) {
      inCartProduct.count = inCartProduct.count + product.count;
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    renderCartQuantity();
  })
);

// изменение кол-ва товаров на разных страницах

const changeCartCount = (e, action, type) => {
  let input = e.currentTarget.closest(".stepper").children[0].children[0];
  if (action === "plus") {
    if (parseInt(input.value) === 999) {
      return;
    } else {
      input.value++;
    }
  }

  if (action === "minus") {
    if (parseInt(input.value) === 1) {
      return;
    } else {
      input.value--;
    }
  }

  if (action === "input") {
    if (input.value <= 0) {
      input.value = 1;
    }

    if (input.value > 999) {
      input.value = 999;
    }
  }

  if (type === "controlState") {
    const cartItem = cart.find(
      (item) =>
        item.id ===
        parseInt(e.currentTarget.closest(".cart__product").dataset.cartitem)
    );
    // оптимизировать условия
    if (action === "plus") {
      cartItem.count++;
    }
    if (action === "minus") {
      cartItem.count--;
    }
    if (action === "input") {
      cartItem.count = input.value;
    }
    orderTotal.innerText = cart.reduce(
      (acc, curr) => acc + curr.price * curr.count,
      0
    );
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

const deleteCartItem = (id) => {
  cart = cart.filter((item) => item.id !== parseInt(id));
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCartItems();
  renderCartQuantity();
};

// объявление глобального скоупа для функций (ограничение модулей)

window.changeCartCount = changeCartCount;
window.deleteCartItem = deleteCartItem;

const renderCartItems = () => {
  cartContainer.innerHTML = "";

  if (cart.length) {
    cart.forEach(({ id, name, price, count, img }) => {
      cartContainer.insertAdjacentHTML(
        "beforeend",
        `<div class="cart__product cart-product" data-cartItem='${id}'>
      <a class="cart-product__img" href="#">
        <picture class="cart-product__pic">
          <source srcset="${img}" type="image/webp">
          <img loading="lazy" src="${img}" class="image" width="140" height="140"
            alt="Изображение товара">
        </picture>
        <a class="cart-product__title" href="#">${name}</a>
        <div class="cart-product__action">
            <button class="cart-product__del btn-reset" onclick="deleteCartItem(${id})">
              <span>Удалить</span>
            </button>
            <div class="cart-product__control">
              <div class="stepper">
                <label class="stepper__field">
                  <input type="number" value="${count}" maxlength="3" class="stepper__input input-reset" oninput="changeCartCount(event, 'input', 'controlState')">
                </label>
                <div class="stepper__btns">
                  <button class="stepper__btn stepper__btn--down stepper__btn--disabled btn-reset" aria-label="Уменьшить количество" onclick="changeCartCount(event, 'minus', 'controlState')">
                    <svg width="14" height="14" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M4 13C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11L20 11C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13L4 13Z"
                        fill="black" />
                    </svg>
                  </button>
                  <button class="stepper__btn stepper__btn--up btn-reset" aria-label="Увеличить количество" onclick="changeCartCount(event, 'plus', 'controlState')">
                    <svg width="14" height="14" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M11.0019 20C11.0019 20.5523 11.4497 21 12.0019 21C12.5542 21 13.0019 20.5523 13.0019 20L13.0019 12.9999L20.0019 12.9999C20.5542 12.9999 21.0019 12.5522 21.0019 11.9999C21.0019 11.4476 20.5542 10.9999 20.0019 10.9999H13.0019L13.0019 4C13.0019 3.44772 12.5542 3 12.0019 3C11.4497 3 11.0019 3.44772 11.0019 4V10.9999H4.00195C3.44967 10.9999 3.00195 11.4476 3.00195 11.9999C3.00195 12.5522 3.44967 12.9999 4.00195 12.9999H11.0019V20Z"
                        fill="black" />
                    </svg>
                  </button>
                </div>
              </div>
              <p class="cart-product__price">
                <span class="cart-product__current">${price}</span><span class="cart-product__unit"> ₽/шт.</span>
              </p>
            </div>
        </div>
      </a>
     </div>`
      );
    });
  } else {
    cartContainer.innerHTML = "Корзина пустая";
  }

  orderCount.innerText = cart.length;
  orderTotal.innerText = cart.reduce(
    (acc, curr) => acc + curr.price * curr.count,
    0
  );
};

plusBtns.forEach((btn) =>
  btn.addEventListener("click", (e) =>
    changeCartCount(e, "plus", "visualState")
  )
);

minusBtns.forEach((btn) =>
  btn.addEventListener("click", (e) =>
    changeCartCount(e, "minus", "visualState")
  )
);

countInputs.forEach((input) =>
  input.addEventListener("input", (e) =>
    changeCartCount(e, "input", "visualState")
  )
);

renderCartQuantity();

// вызов функций на разных страничках

if (location.href.includes("page-cart")) renderCartItems();
if (location.href.includes("page-order")) {
  orderCount.innerText = cart.length;
  orderTotal.innerText = cart.reduce(
    (acc, curr) => acc + curr.price * curr.count,
    0
  );
}
