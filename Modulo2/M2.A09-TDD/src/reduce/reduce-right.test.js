'use strict'

import { expect } from 'chai';
import reduceRight from './reduce-right';

it('reduceRight should be a function', () => {
    expect(reduceRight).to.be.a('function');
})

it('reduceRight(["do", "nan", "Fer"], (acc, item) => acc + item, 0) should return Fernando', () => {
    const before = reduceRight(["do", "nan", "Fer"], (acc, item) => acc + item, 0)
    const after = "Fernando";
    expect(before).to.be.equal(after);
})
