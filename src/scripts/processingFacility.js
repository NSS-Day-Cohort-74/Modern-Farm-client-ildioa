import { barn } from "./storageBarn.js";

export const processor = () => {
	return {
		conveyorBelt: [],
		MAX_QUEUE_SIZE: 3,
		MIN_QUEUE_SIZE: 1,
		enqueue: function (crop) {
			if (this.size() === this.MAX_QUEUE_SIZE) {
				console.error("Queue full");
			} else {
				this.conveyorBelt.push(crop);
			}
		},
		dequeue: function () {
			if (this.size() === this.MAX_QUEUE_SIZE) {
				return this.conveyorBelt.shift();
			} else if (barn().isEmpty()) {
				return this.conveyorBelt.shift();
			} else {
				console.error("Not enough on conveyor belt");
			}
		},
		next: function () {
			return this.conveyorBelt[0].type;
		},
		last: function () {
			return this.conveyorBelt[conveyorBelt.length - 1].type;
		},
		isEmpty: function () {
			return this.conveyorBelt.length === 0;
		},
		size: function () {
			return this.conveyorBelt.length;
		},
	};
};
