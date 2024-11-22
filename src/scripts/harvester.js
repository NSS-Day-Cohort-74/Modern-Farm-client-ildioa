
export const harvestPlants = (plantsArray) =>
     plantsArray.map(
        (plant) => {
            if (plant instanceof Array) {
                return Array(
                    plant[0]
                    .output)
                    .fill(plant[0])
                    .flat();
            } else {
                return Array(
                    plant
                    .output)
                    .fill(plant)
                    .flat();
            }
        }
    ).flat();