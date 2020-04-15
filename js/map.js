let myVap;

const init = () => {
  myMap = new ymaps.Map('map', {
    center: [59.935274, 30.312388],
    zoom: 11,
    controls: []
  });

  const coords = [
    [59.94555454, 30.38935443],
    [59.91155454, 30.50025443],
    [59.88695454, 30.31965443],
    [59.97035454, 30.31515443]
  ];

  const myCollection = new ymaps.GeoObjectCollection({}, {
    draggable: false,
    iconLayout: 'default#image',
    iconImageHref: "../img/map/marker.png", 
    iconImageSize: [46, 57],
    iconImageOffset: [-35, -52]
  });

  coords.forEach(coord => {
    myCollection.add(new ymaps.Placemark(coord));
  });

  myMap.geoObjects.add(myCollection);

  myMap.behaviors.disable('scrollZoom');
}

ymaps.ready(init);