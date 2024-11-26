//Import necessary functions
import { usePlants } from "./field.js";
import { plantSeeds } from "./tractor.js";
import { createPlan } from "./plan.js";
import { harvestPlants } from "./harvester.js";
import { barn } from "./storageBarn.js";
import { processor } from "./processingFacility.js";
import { catalog, emojiCatalog } from "./catalog.js";
//
//store DOM reference to Container element
const htmlContainer = document.querySelector(".container");

//store yearly plan Nested Array in Variable yearlyPlan
const yearlyPlan = createPlan();
//store barn function return object in Variable
let storageBarn = barn();
//store processor function return object in Variable
let processingFacility = processor();

// take in yearlyPlan and push every item to plantsInField Array
plantSeeds(yearlyPlan);
//store copy of plantsInField Array
const plantsInField = usePlants();
// take in plantsInField and return new Array of harvested plants
const harvestedPlants = harvestPlants(plantsInField);

//generate emojified html for displaying our catalog
let plantHTML = emojiCatalog(harvestedPlants);

// assigning the innerHTML property of our DOM reference htmlContainer to our plantHTML (html) string
htmlContainer.innerHTML = plantHTML;
