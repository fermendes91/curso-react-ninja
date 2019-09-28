'use strict'

const find = (arr, func) => {
    return (function findInternal (arrayInternal, counter) {
        const [head, ...tail] = arrayInternal;

        return arrayInternal.length === 0 
            ? undefined
            : func(head, counter, arr)
                ? head
                : findInternal(tail, counter+1)
    })(arr, 0)
        
}

export default find;