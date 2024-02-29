const minMax = (arr) => {
    let max = arr[0]
    let min = arr[0]
    for (const el of arr) {
        if (max < el) max = el
        if (min > el) min = el
    }
    return [min, max]
}

function minMax(arr) {
    return [Math.min.apply(null, arr), Math.max.apply(null, arr)]
}

console.log(minMax([3, 9, 11, 25, 47, 4, 1]))
console.log(minMax([3, 1]))
console.log(minMax([1]))
