export const catalog = (harvestedPlants) =>
	harvestedPlants
		.map((plant) => {
			return `
<section class="plant">${plant.type}</section>
`;
		})
		.join("");

export const emojiCatalog = (harvestedPlants) =>
	harvestedPlants
		.map(
			(plant) => `
<section class="plant">${plant.emoji}</section>
`,
		)
		.join("");
