import { usePlants } from "./field.js";
import {plantSeeds} from "./tractor.js";
import { createPlan } from "./plan.js"
import { harvestPlants } from "./harvester.js";
const htmlContainer = document.querySelector(".container");
//console.log("Welcome to the main module")

const yearlyPlan = createPlan();
plantSeeds(yearlyPlan); 
 
const plantsInField = usePlants();
console.log(plantsInField)

const postHarvest = harvestPlants(plantsInField);
console.log(postHarvest)
