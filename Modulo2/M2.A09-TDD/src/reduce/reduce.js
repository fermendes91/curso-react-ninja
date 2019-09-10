'use strict'

const reduce = (arr, func, initialValue = 0) => {
    let acc = initialValue;
    
    for (let i = 0; i < arr.length; i++) {
        acc = func(acc, arr[i]) 
    }
    return acc;
}

export default reduce;