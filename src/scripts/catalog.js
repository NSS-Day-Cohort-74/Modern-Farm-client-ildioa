export const Catalog = (harvestedPlants) => 
    harvestedPlants.map((plant) => `
<section class="plant">${plant.type}</section>
`
).join("");