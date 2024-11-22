let plantsInField = [];

export const addPlant = (seedObj) => {
    plantsInField.push(seedObj);
    
}


export const usePlants = () => plantsInField.map((plant) => plant);
