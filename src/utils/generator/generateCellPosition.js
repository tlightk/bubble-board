// generates a random position within a grid cell for each object in an array

export default function generateCellPosition(arr) {
    const locations = ["start", "end", "center"];

    function randomSelect(obj) {
        const spot1 = locations[Math.floor(Math.random() * locations.length)];
        const spot2 = locations[Math.floor(Math.random() * locations.length)];
        return {...obj, position: `${spot1} ${spot2}`};
    }

    const newArray = arr.map(item => randomSelect(item))

    return newArray;
}