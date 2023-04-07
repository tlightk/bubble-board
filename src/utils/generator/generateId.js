// generates a unique ID for each object
// CAN ONLY BE CALLED AFTER FIRST GENERATING COL & ROW

export default function generateId(arr) {
    const newArray = arr.map(item => {
        return {...item, id: `${item.col}${item.row}`}
    })

    return newArray;
}