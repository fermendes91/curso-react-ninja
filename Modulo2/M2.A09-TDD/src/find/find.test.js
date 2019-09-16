'use strict'

import { expect } from 'chai'
import find from './find-recursive'

it('find should be a function', () => {
    expect(find).to.be.a('function')
})

it('find([1, 2, 3], (item) => item ===2) should return 2', () => {
    const before = find([1, 2, 3], (item) => item === 2);
    const after = 2;
    expect(before).to.be.equal(after);
})

it('find([1, 2, 3], (item) => item === 3) should return 3', () => {
    const before = find([1, 2, 3], (item) => item === 3);
    const after = 3;
    expect(before).to.be.equal(after);
})

it('find([1, 2, 3, 4, 5], (item) => item > 3) should return 4', () => {
    const before = find([1, 2, 3, 4, 5], (item) => item > 3);
    const after = 4;
    expect(before).to.be.equal(after);
})

it('find([1, 2, 3, 4, 5], (item, index, array) => array[index] > === 2) should return 4', () => {
    const before = find([1, 2, 3, 4, 5], (item, index, array) => array[index] === 2);
    const after = 2;
    expect(before).to.be.equal(after);
})

it('find([], (item) => item ) should return undefined', () => {
    const before = find([], (item) => item )
    const after = undefined;
    expect(before).to.be.equal(after);
})