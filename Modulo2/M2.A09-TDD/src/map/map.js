'use strict'

// caso não seja passado como parametro, arr ou func o igual no parametro da função
// define o valor default do parametro.
const map = (arr = [], func = item => item) => {    
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(func(arr[i], i, arr));
    }
    return newArr;
}

export default map;