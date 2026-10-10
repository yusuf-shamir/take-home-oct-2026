/* SAMPLE INPUT */ 
/* PLEASE CHANGE ACCORDINGLY */
 
const n = 3
const data = [[105231, 183], [105334, 34], [105198, 543]]
const q = 2
const queries = [105338, 105410]

/* SOLUTION */

const numElemLessThanOrEqual = (arr, x) => {
    let low = 0
    let high = arr.length
    let mid

    while (low < high) {
        mid = Math.floor((low + high) / 2)
        if (x < arr[mid]) {
            high = mid
        } else {
            low = mid + 1
        }
    }

    return low
}

const numElemLessThan = (arr, x) => {
    let low = 0
    let high = arr.length
    let mid

    while (low < high) {
        mid = Math.floor((low + high) / 2)
        if (x <= arr[mid]) {
            high = mid
        } else {
            low = mid + 1
        }
    }

    return low
}

const ttl = () => {
    const result = []
    const startT = []
    const endT = []

    for (let i = 0; i < data.length; ++i) {
        startT.push(data[i][0])
        endT.push(data[i][0] + data[i][1])    
    }

    startT.sort((a, b) => a - b)
    endT.sort((a, b) => a - b)

    for (let i = 0; i < queries.length; ++i) {
        const query = queries[i]
        result.push(numElemLessThanOrEqual(startT, query) - numElemLessThan(endT, query))
    }

    return result
}

console.log(ttl())