const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = 'pk.eyJ1Ijoic2pvc2VwaDExMjM2IiwiYSI6ImNrMTZsOXptMDAxMXkzY3BhZm9kZWxmOTgifQ.34HJoREz_ili2il4iJL6bQ';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});
const markerDomElm = document.createElement('div');
markerDomElm.style.width = '32px';
markerDomElm.style.height = '39px';
markerDomElm.style.backgroundImage = 'url(http://i.imgur.com/wbMOfml.png)';
new mapboxgl.Marker(markerDomElm).setLngLat([-74.009151, 40.705086]).addTo(map);