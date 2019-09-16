'use strict'

// caso não seja passado como parametro, arr ou func o igual no parametro da função
// define o valor default do parametro.
const map = (arr = [], func = item => item) => {
    if(!Array.isArray(arr)) throw new TypeError('First parameter must be an array');   
    if(typeof func !== 'function') throw new TypeError('Second parameter must be a function');   
    
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(func(arr[i], i, arr));
    }
    return newArr;
}

export default map;