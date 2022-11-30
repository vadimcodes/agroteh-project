function init() {
  let map = new ymaps.Map("map", {
    center: [56.10186131310316, 47.25180185844421],
    zoom: 17,
  });

  let placemark = new ymaps.Placemark(
    [56.10145356864081, 47.25464499999998],
    {
      balloonContentHeader: "Агротех21",
      balloonContentFooter: "г. Чебоксары, ул. Пристанционная, д. 3",
      iconCaption: 'Компания "Агротех21"',
    },
    {
      iconImageSize: [30, 30],
      iconColor: "#27AE4D",

      iconImageOffset: [0, 0],
    }
  );

  map.controls.remove("geolocationControl");
  map.controls.remove("searchControl");
  map.controls.remove("trafficControl");
  map.controls.remove("typeSelector");
  map.controls.remove("fullscreenControl");
  map.controls.remove("zoomControl");
  map.controls.remove("rulerControl");
  map.behaviors.disable(["scrollZoom"]);

  map.geoObjects.add(placemark);
  // placemark.balloon.open();
}

ymaps = window.ymaps;

ymaps?.ready(init);
