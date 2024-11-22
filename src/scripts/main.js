//Import necessary functions
import { usePlants } from "./field.js";
import {plantSeeds} from "./tractor.js";
import { createPlan } from "./plan.js"
import { harvestPlants } from "./harvester.js";
import { Catalog } from "./catalog.js";
import { sortHarvest, mergePlantsToHTML } from "./sort.js";
import { barn } from "./storageBarn.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { processor } from "./processingFacility.js";
//store DOM reference to Container element
const htmlContainer = document.querySelector(".container");
//console.log("Welcome to the main module")

//store yearly plan Nested Array in Variable yearlyPlan
const yearlyPlan = createPlan();
const storageBarn = barn();

// take in yearlyPlan and push every item to plantsInField Array
plantSeeds(yearlyPlan); 
//store copy of plantsInField Array 
const plantsInField = usePlants();
// take in plantsInField and return new Array of harvested plants
const harvestedPlants = harvestPlants(plantsInField);

//push harvested plants to storageBarn Array
harvestedPlants.forEach((plant) => storageBarn.push(plant))
//console.log(storageBarn.getItems())

processor().enqueue(createAsparagus)
processor().enqueue(createAsparagus)
processor().enqueue(createAsparagus)
processor().enqueue(createAsparagus)


console.log(processor().size())
//const sortedHarvest = sortHarvest(harvestedPlants);

//const mergedPlants = mergePlantsToHTML(harvestedPlants);

// take in harvestedPlants Array and generate html element for every index,
// storing that element in a new array and joining that Array
// to create html string to return 
const plantHtml = Catalog(harvestedPlants);

// assigning innerHTML of container Element to the plantHTML string
htmlContainer.innerHTML = plantHtml;


