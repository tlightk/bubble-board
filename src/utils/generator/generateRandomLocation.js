// generates a random location on the grid for each object in an array

export default function generateRandomLocation (arr) {
    let placementBoard = [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],];
    let col;
    let row;

    // takes an object, checks if col/row is available, slaps it on to obj and updates board
    function recurseToOpenSpot(obj) {
        col = Math.floor(Math.random() * 7);
        row = Math.floor(Math.random() * 3);
        if (placementBoard[col][row] === 0) {
            //update placementBoard and stop recursion
            placementBoard[col][row] = 1;
            obj.col = col;
            obj.row = row;
            return obj;
        } else {
            return recurseToOpenSpot(obj);
        }
    }

    // map all objects in array to slap on col/row property
    const newArray = arr.map(item => {
        return recurseToOpenSpot(item);
    })

    return newArray;
}