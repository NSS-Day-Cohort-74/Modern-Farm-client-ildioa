export const barn = () => {
	return {
		//define crops Array to store crops in barn Object
		crops: [],
		//define method push to add item to the end of barn Object crops Array
		push: function (crop) {
			this.crops.push(crop);
		},
		//define method pop to remove item from the end of barn Object crops Array and return it
		pop: function () {
			return this.crops.pop();
		},
		//define method peek to return the type parameter of the last crop in barn Object  crops Array
		peek: function () {
			return this.crops[this.crops.length - 1].type;
		},
		//define method isEmpty to return a boolean (true/false) depending on if the barn Object crops Array is is empty or not
		isEmpty: function () {
			return this.crops.length === 0;
		},
		//define method getItems to return all items in barn Object crops Array
		getItems: function () {
			return this.crops.map((item) => item);
		},
	};
};
