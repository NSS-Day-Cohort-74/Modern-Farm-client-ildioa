let storageBarn = [];

export const barn = () => {
    return {
        push: (crop) => (storageBarn.push(crop)),
        pop: () => (storageBarn.pop() ),
        peek: () => (storageBarn[storageBarn.length -1].type),
        isEmpty: () => (storageBarn.length === 0),
        getItems: () => (structuredClone(storageBarn)),
}
};

    