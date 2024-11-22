import { barn } from "./storageBarn.js";
let conveyorBelt = []

export const processor = () => ({

        enqueue: function (crop) {
            if (this.size() === 3) {
                console.error("Queue full")
            } else {
                conveyorBelt.push(crop)
            }},
        dequeue: function () { 
            if (barn().isEmpty()) {
                conveyorBelt.shift()
            } else if (this.size() > 1) {
                conveyorBelt.shift()
            } else {console.error("Not enough on conveyor belt")
            }
        },
        next: () => (conveyorBelt[1].type),
        last: () => (conveyorBelt[conveyorBelt.length -1].type),
        isEmpty: () => (conveyorBelt.length === 0),
        size: () => (conveyorBelt.length),
})

export const processedGoods = () => {
    processor().dequeue()
    switch () {
        case():
        case():
        case():
        case():
        case():
        case():
    }
}