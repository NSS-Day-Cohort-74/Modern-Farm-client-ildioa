export const harvestPlants = (plantsArray) => {
	const arrayOfPlants = plantsArray
		.map((plant) => {
			if (plant.type === "Corn") {
				return Array(plant.output / 2).fill(plant);
			} else {
				return Array(plant.output).fill(plant);
			}
		}).flat();

	return arrayOfPlants.map( (plant, index) => ({id:++index, ...plant}) )
	};
