// generates a random color for each bubble in an array

export default function generateBubbleColor(arr) {

    function genCol() {
        return Math.floor(Math.random() * 361);
    }

    const newArray = arr.map(item => {
        // return { ...item, color: `rgba(${genCol()}, ${genCol()}, ${genCol()}, 0.3)` }
        return {...item, color: `hsl(${genCol()}, 100%, 90%)`}
    })

    return newArray;
}