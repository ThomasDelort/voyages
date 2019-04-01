import { buildAllMarks } from "./buildAllMarks"
import { buildAllTravels } from "./buildAllTravels"

let map;
const resetMapButton = document.querySelector("#reset-map");


/* Initialisation de la map google */
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 34.559371,
            lng: 13.252210
        },
        zoom: 2.7,
        styles: [{
                "featureType": "administrative.land_parcel",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "administrative.neighborhood",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "poi.business",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "road",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "water",
                "elementType": "labels.text",
                "stylers": [{
                    "visibility": "off"
                }]
            }
        ]
    });
}

// bouton reset map 

resetMapButton.addEventListener("click", function () {
    initMap();
    buildAllTravels();
    buildAllMarks();
})


export { initMap, map }