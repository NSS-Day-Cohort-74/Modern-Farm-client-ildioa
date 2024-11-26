
//define a function to iterate over the harvestedPlants Array and return an html string
// with each of the plants type properties in an html <section> tag
export const catalog = (harvestedPlants) =>
	harvestedPlants
		.map((plant) => {
			return `
<section class="plant">${plant.type}</section>
`;
		})
		.join("");
//define a function to iterate over the harvestedPlants Array and return an html string
// with each of the plants emoji properties in an html <section> tag
export const emojiCatalog = (harvestedPlants) =>
	harvestedPlants
		.map(
			(plant) => `
<section class="plant">${plant.emoji}</section>
`,
		)
		.join("");
