import { barn } from "./storageBarn.js";

export const processor = () => {
	return {
		conveyorBelt: [],
		MAX_QUEUE_SIZE: 3,
		MIN_QUEUE_SIZE: 1,
		//define Object method enqueue to push a crop to conveyorBelt Array 
		//with the condition that the max queue size has not been exceeded
		enqueue: function (crop) {
			if (this.size() === this.MAX_QUEUE_SIZE) {
				console.error("Queue full");
			} else {
				this.conveyorBelt.push(crop);
			}
		},
		//define Object method dequeue to remove and return the first item in conveyorBelt Array
		//with condition that the conveyorBelt has at least three items or the storageBarn is empty
		dequeue: function () {
			if (this.size() === this.MAX_QUEUE_SIZE|| barn().isEmpty()) {
				return this.conveyorBelt.shift();
			} else {
				console.error("Not enough on conveyor belt");
			}
		},
		//define Object method next to return the type property of the item at first index of the conveyorBelt Array
		next: function () {
			return this.conveyorBelt[0].type;
		},
		//define Object method last to return the type property of the item at the last index of the conveyorBelt Array
		last: function () {
			return this.conveyorBelt[conveyorBelt.length - 1].type;
		},
		//define an Object method to check if the conveyorBelt Array is empty
		isEmpty: function () {
			return this.conveyorBelt.length === 0;
		},
		//define an Object method to return the size of the conveyorBelt Array
		size: function () {
			return this.conveyorBelt.length;
		},
	};
};
