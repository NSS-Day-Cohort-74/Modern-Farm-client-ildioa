//Import necessary functions
import { addPlant } from "./field.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";

// Iterate over plan Nested Array and add crops to plantsInField Array
export const plantSeeds = (createPlanArry) => {
	for (const row of createPlanArry) {
		for (const plant of row) {
			switch (plant) {
				case "Corn":
					//add corn plant Object to plantsInField Array
					addPlant(createCorn());
					break;
				case "Sunflower":
					//add sunflower plant Object to plantsInField Array
					addPlant(createSunflower());
					break;
				case "Soybean":
					//add Soybean plant Object to plantsInField Array
					addPlant(createSoybean());
					break;
				case "Asparagus":
					//add Asparagus plant Object to plantsInField Array
					addPlant(createAsparagus());
					break;
				case "Potato":
					//add Potato plant Object to plantsInField Array
					addPlant(createPotato());
					break;
				case "Wheat":
					//add Wheat plant Object to plantsInField Array
					addPlant(createWheat());
					break;
			}
		}
	}
};
