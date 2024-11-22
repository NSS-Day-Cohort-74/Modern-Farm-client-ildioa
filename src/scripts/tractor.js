import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

export const plantSeeds = (createPlanArry) => {
    for (const row of createPlanArry) {
        for (const plant of row) {
            switch(plant) {
                case "Corn":
                    addPlant(createCorn())
                case "Sunflower":
                    addPlant(createSunflower())
                case "Soybean":
                    addPlant(createSoybean())
                case "Asparagus":
                    addPlant(createAsparagus())
                case "Potato":
                    addPlant(createPotato())
                case "Wheat":
                    addPlant(createWheat())
                    
            }
        }
    }
    
}