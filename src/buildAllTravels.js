// Construire la liste des voyages 

import { data } from "./travels"
import { allMarkers } from "./buildAllMarks"
import { map } from "./map"

const travelsContainer = document.querySelector("#travels-container");

function buildAllTravels() {
    while (travelsContainer.hasChildNodes()) {
        travelsContainer.removeChild(travelsContainer.lastChild);
    }
    for (let travel of data) {
        const travelElement = document.createElement("div");
        let destlist = "";
        for (let destination of travel.etapes) {
            destlist += destination + ",";
        }
        destlist = destlist.substring(0,destlist.length-1);

        travelElement.innerHTML = `<div class="card text-center" destinations="${destlist}">
        <h4 class="card-header font-weight-bold">
            ${travel.description}
        </h4>
        <a href="${travel.link}"><img class="card-img" src="${travel.imagePath}" alt=""></a>
        <div class="card-body">
            <a href="${travel.link}" class="btn btn-danger btn-block">Voir l'album</a>
        </div>
    </div>`;
        travelsContainer.appendChild(travelElement);

        /* mouseover des cards */
        travelElement.addEventListener("mouseenter", function(){
            travelElement.classList.add("over");
            let zoomYetDone = 0;
            for(let mark of allMarkers){
                if(travel.etapes.includes(mark.title)) {
                    mark.setIcon("./images/red.png");
                    if(zoomYetDone === 0) {
                        if(map.getZoom()<5){map.setZoom(5);}
                            map.panTo(mark.getPosition());
                            zoomYetDone = 1;
                    }
                }
            }
        })

        /* on quitte le mouseover des cards */
        travelElement.addEventListener("mouseleave", function(){
            travelElement.classList.remove("over");

            /* Je remet tous les markers en rouge, sauf si un est clické */
            for(let mark of allMarkers){
                if((mark.icon="./images/red.png") && (mark.clickOn==false) ) {
                    mark.setIcon("./images/purple.png");
                }
            }
        })
    };
}

export { buildAllTravels }