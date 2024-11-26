//assign plantsInField Variable to empty Array
let plantsInField = [];

export const addPlant = (seedObj) => {
	//check if the seed Object is an Array
	//if so for each seed Object in the Array push that Object to the plantsInField Array
	if (Array.isArray(seedObj)) {
		seedObj.forEach((cornSeedObj) => plantsInField.push(cornSeedObj));
	//if our first condition doesn't pass push the non-Array seedObj to plantsInField Array
	} else {
		plantsInField.push(seedObj);
		return seedObj;
	}
};

// define function to return a new copy of plantsInField Array
export const usePlants = () => plantsInField.map((plant) => plant);
