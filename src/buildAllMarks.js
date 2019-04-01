// Ajoute les marks sur la carte

import { destinations } from "./destinations"
import { buildAllTravels } from "./buildAllTravels"
import { map } from "./map"

let allMarkers = [];

function buildAllMarks() {

    destinations.forEach(function (mark) {
        const marker = new google.maps.Marker({
            position: mark.coordinates,
            map: map,
            title: mark.title,
            icon: "./images/purple.png",
            clickOn: false
        });
        allMarkers.push(marker);

        marker.addListener('mouseover', function () {
            document.getElementById('lieu').innerHTML = '<p>' + mark.title + '</p>';
        })

        marker.addListener('mouseout', function() {
            document.getElementById('lieu').innerHTML = '';
        });

        /* Lorsque l'on clique sur une mark */
        marker.addListener('click', function () {

            /* Je remet tous les markers en violet et le click en rouge */
            /* Je lui met une variable clickOn à true et je met les autres sur false */
            for(let mark of allMarkers){
                if(mark.clickOn = true) {
                    mark.setIcon("./images/purple.png");
                    mark.clickOn = false;
                }
            }
            marker.setIcon("./images/red.png");
            marker.clickOn = true;
           
            
            

            /* Je zoom si nécessaire et je slide */
            if(map.getZoom()<5){map.setZoom(5);}
            map.panTo(marker.getPosition());
            buildAllTravels();
            const listfilter = document.querySelectorAll(".card");
            for(let card of listfilter){
                const destinationslist = card.getAttribute("destinations").split(",");
                if(!(destinationslist.includes(marker.title))){
                    card.classList.add("hide");
                } else {
                    card.classList.add("show");
                }
            }
        });
    })
}

export { buildAllMarks, allMarkers }