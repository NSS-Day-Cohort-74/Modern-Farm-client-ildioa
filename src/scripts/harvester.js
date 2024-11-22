export const harvestPlants = (plantsArray) =>
	plantsArray
		.map((plant) => {
			if (plant.type === "Corn") {
				return Array(plant.output / 2).fill(plant);
			} else {
				return Array(plant.output).fill(plant);
			}
		})
		.flat();

