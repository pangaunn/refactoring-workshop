const statement = require('./statement.js')
const invoices = require('../data/invoices.json')
const plays = require('../data/plays.json')

describe('statement', () => {
  it('should pass', () => {
    const expected = `Statement for BigCo
  Hamlet: $650.00 (55 seats)
  As You Like It: $580.00 (35 seats)
  Othello: $500.00 (40 seats)
Amount owed is $1,730.00
You earned 0255710 credits
`
    expect(statement(invoices[0], plays)).toBe(expected)
  })
})
