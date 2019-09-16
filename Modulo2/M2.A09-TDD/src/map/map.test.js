'use strict'

import { expect } from 'chai';
import map from './map.js';

it('map should be a function', () => {
    expect(map).to.be.a('function');
});

it('map([1, 2], (item) => item) should return [1, 2]', () => {
    expect(map([1, 2], (item) => item)).to.be.deep.equal([1, 2]);
});

it('map([3, 4], (item) => item) should return [3, 4]', () => {
    expect(map([3, 4], (item) => item)).to.be.deep.equal([3, 4]);
});

it('map([1, 2], (item) => item + 1) should return [2, 3]', () => {
    expect(map([1, 2], (item) => item + 1)).to.be.deep.equal([2, 3]);
});

it('map([13, 28], (item) => item + 1) should return [14, 29]', () => {
    expect(map([13, 28], (item) => item + 1)).to.be.deep.equal([14, 29]);
});

it('map([1, 2], (item, index) => index) should return [0, 1]', () => {
    expect(map([1, 2], (item, index) => index)).to.be.deep.equal([0, 1]);
});

it('map([1, 2], (item, index, array) => array) should return [[1,2], [1,2]]', () => {
    expect(map([1, 2], (item, index, array) => array)).to.be.deep.equal([[1, 2], [1, 2]]);
});

it('map() should return []', () => {
    expect(map()).to.be.deep.equal([]);
});

it('map(1) should return throw a TypeError', () => {
    let error;
    try {
        map(1)
    } catch (e) {
        error = e;
    }

    expect(error.name).to.be.equal('TypeError');
});

it('map(1) should return throw a TypeError with message "First parameter must be an array"', () => {
    let error;
    try {
        map(1)
    } catch (e) {
        error = e;
    }

    expect(error.message).to.be.equal('First parameter must be an array');
});

it('map([1, 2], 2) should return TypeError', () => {
    let error;
    try {
        map([1, 2], 2)
    } catch (e) {
        error = e;
    }

    expect(error.name).to.be.equal('TypeError')
});

it('map([1, 2], 2) should return throw a TypeError with message "Second parameter must be a function"', () => {
    let error;
    try {
        map([1, 2], 2)
    } catch (e) {
        error = e;
    }

    expect(error.message).to.be.equal('Second parameter must be a function')
});