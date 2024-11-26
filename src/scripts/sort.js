export const sortHarvest = (harvestedPlants) =>
	harvestedPlants.sort((current, next) => {
		if (current.type < next.type) {
			return -1;
		}
		return 0;
	});

export const mergePlantsToHTML = (harvestedPlants) => {
	const corn = harvestedPlants.filter((plant) => {
		if (plant.type === "Corn") {
			return plant;
		}
	});
	const sunflower = harvestedPlants.filter((plant) => {
		if (plant.type === "Sunflower") {
			return plant;
		}
	});
	const asparagus = harvestedPlants.filter((plant) => {
		if (plant.type === "Asparagus") {
			return plant;
		}
	});
	const potato = harvestedPlants.filter((plant) => {
		if (plant.type === "Potato") {
			return plant;
		}
	});
	const soybean = harvestedPlants.filter((plant) => {
		if (plant.type === "Sunflower") {
			return plant;
		}
	});
	const wheat = harvestedPlants.filter((plant) => {
		if (plant.type === "Wheat") {
			return plant;
		}
	});

	return `<section class="plants-merged">Corn: ${corn.length}</section>
        <section class="plants-merged">Sunflowers: ${sunflower.length}</section>
        <section class="plants-merged">Asparagus: ${asparagus.length}</section>
        <section class="plants-merged">Potato: ${potato.length}</section>
        <section class="plants-merged">Soybeans: ${soybean.length}</section>
        <section class="plants-merged">Wheat: ${wheat.length}</section>`;
};

