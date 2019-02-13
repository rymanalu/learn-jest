'use strict'

const { sum, sub, mul, div } = require('./math')

test('adding 1 + 2 equals 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('subtracting 3 - 1 equals 2', () => {
  expect(sub(3, 1)).toBe(2)
})

test('multiplying 2 * 3 equals 6', () => {
  expect(mul(2, 3)).toBe(6)
})

test('dividing 6 / 3 equals 2', () => {
  expect(div(6, 3)).toBe(2)
})
