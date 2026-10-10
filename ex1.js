/* SAMPLE INPUT */ 
/* PLEASE CHANGE ACCORDINGLY */

const n = 3
const servers = [30, 10, 20]

/* SOLUTION */ 

const extractMin = (arrA, arrB) => {
    let res = undefined

    if (!arrA.length && arrB.length) res = arrB.shift()
    if (!arrB.length && arrA.length) res = arrA.shift()

    if (arrA.length && arrB.length) {
        res = Math.min(arrA[0], arrB[0])
        if (res === arrA[0]) {
            arrA.shift()
        } else {
            arrB.shift()
        }
    }

    return res
}

const serverLoadMerge = (servers) => {
    const sortedInitials = servers.toSorted((a, b) => a - b)
    const mergedSums = []

    let sum = 0

    while (sortedInitials.length || mergedSums.length) {
        const a = extractMin(mergedSums, sortedInitials)
        const b = extractMin(mergedSums, sortedInitials)
        if (a && b) {
            mergedSums.push(a + b)
            sum += (a + b)
        }
    }

    return sum
}

console.log(serverLoadMerge(servers))