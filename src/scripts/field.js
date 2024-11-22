let plantsInField = [];

export const addPlant = (seedObj) => {
	if (Array.isArray(seedObj)) {
		seedObj.forEach((cornSeedObj) => plantsInField.push(cornSeedObj));
	} else {
		plantsInField.push(seedObj);
		return seedObj;
	}
};

//export const usePlants = () => plantsInField.map((plant) => plant);
export const usePlants = () => structuredClone(plantsInField);
