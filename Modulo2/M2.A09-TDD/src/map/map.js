'use strict'

let map = (arr, func) => {
    // primeira implementação modo Hiperativa
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(func(arr[i], i, arr));
    }
    return newArr;
}

export default map;