
// why did we have to store the URL in a var to have it show up on the map?
export const markers = {
   defaultMarker: "http://i.imgur.com/WbMOfMl.png";
   activityMarker: "http://i.imgur.com/WbMOfMl.png";
   hotelMarker: "http://i.imgur.com/D9574Cu.png";
   restMarker: "http://i.imgur.com/cqR6pUI.png"
}


export function createMarker (markerType, coordinates) {
  let markerDomElm = document.createElement('div');
  markerDomElm.style.width = '32px';
  markerDomElm.style.height = '39px';
  markerDomElm.style.backgroundImage = `url(${markerType})`;
  return new mapboxgl.Marker(markerDomElm).setLngLat(coordinates).addTo(map);

}

