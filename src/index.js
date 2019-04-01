import { initMap } from "./map"
import { buildAllTravels } from "./buildAllTravels"
import { buildAllMarks } from "./buildAllMarks"

function init() {
    initMap();
    buildAllTravels();
    buildAllMarks();
}

window.init = init;