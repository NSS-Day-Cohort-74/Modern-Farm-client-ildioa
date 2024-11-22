export const Catalog = (harvestedPlants) => 
    harvestedPlants.map((plant) => `
<section class="plant">${plant.type}</section>
`
).join("");

export const emojiCatalog = (harvestedPlants) => 
    harvestedPlants.map((plant) => `
<section class="plant">${plant.emoji}</section>
`
).join("");