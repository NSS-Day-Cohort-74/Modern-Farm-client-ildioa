//Import necessary functions
import { addPlant } from "./field.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";

// 
export const plantSeeds = (createPlanArry) => {
	for (const row of createPlanArry) {
		for (const plant of row) {
			switch (plant) {
				case "Corn":
					addPlant(createCorn());
					break;
				case "Sunflower":
					addPlant(createSunflower());
					break;
				case "Soybean":
					addPlant(createSoybean());
					break;
				case "Asparagus":
					addPlant(createAsparagus());
					break;
				case "Potato":
					addPlant(createPotato());
					break;
				case "Wheat":
					addPlant(createWheat());
					break;
			}
		}
	}
};

