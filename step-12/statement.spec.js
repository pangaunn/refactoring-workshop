const statement = require('./statement.js')
const invoices = require('../data/invoices.json')
const plays = require('../data/plays.json')

describe('statement', () => {
  it('should pass', () => {
    const expected = `Statement for BigCo
  Hamlet: $6.50 (55 seats)
  As You Like It: $5.80 (35 seats)
  Othello: $5.00 (40 seats)
Amount owed is $17.30
You earned 47 credits
`
    expect(statement(invoices[0], plays)).toBe(expected)
  })
})
