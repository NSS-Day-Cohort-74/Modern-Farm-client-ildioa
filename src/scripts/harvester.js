export const harvestPlants = (plantsArray) => {
	// iterate over plantsArray and return a new Array for each plant containing it's output Objects
	const arrayOfPlants = plantsArray
		.map((plant) => {
			if (plant.type === "Corn") {
				return Array(plant.output / 2).fill(plant);
			} else {
				return Array(plant.output).fill(plant);
			}
			//flatten the nested Array produced by creating new Arrays to contain our each of our harvestedPlants
		}).flat();
// returns an new Array with the incrementing id property added to each element
	return arrayOfPlants.map( (plant, index) => ({id:++index, ...plant}) )
	};
