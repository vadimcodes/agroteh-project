



  // document.querySelectorAll('.main-categories__link').forEach(function (tabsBtn) {
  //   tabsBtn.addEventListener('click', function (e) {
  //     // const path = e.currentTarget.dataset.path;

  //     document.querySelectorAll('.main-categories__link').forEach(function (btn) {
  //       btn.classList.toggle('main-categories__link--active')
  //     });
  //     // e.currentTarget.classList.add('main-categories__link--active');

  //     document.querySelectorAll('.header__menu-sublist').forEach(function (tabsBn) {
  //       tabsBn.classList.toggle('header__menu-sublist--active')
  //       // tabsBn.classList.add('header__menu-sublist--active');
  //     });
  //   });
  // });


  let tabsBtn = document.querySelectorAll('.main-categories__link');
let tabsItem = document.querySelectorAll('.header__menu-sublist');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('main-categories__link--active')});
    e.currentTarget.classList.add('main-categories__link--active');

    tabsItem.forEach(function(element){ element.classList.remove('header__menu-sublist--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('header__menu-sublist--active');
    // tabsItem.forEach(function(element){ element.classList.add('header__menu-sublist--active')});
  });
});

