// const statement = require('./statement.js')
const invoices = require('./data/invoices.json')
const plays = require('./data/plays.json')
const fs = require('fs')

describe('statement', () => {
  const expected = `Statement for BigCo
  Hamlet: $650.00 (55 seats)
  As You Like It: $580.00 (35 seats)
  Othello: $500.00 (40 seats)
Amount owed is $1,730.00
You earned 47 credits
`
  const stepFolders = fs.readdirSync('./').filter(f => f.startsWith('step'))
  for (step of stepFolders) {
    it(`should pass ${step}`, () => {
      const statement = require(`./${step}/statement.js`)
      expect(statement(invoices[0], plays)).toBe(expected)
    })
  }
})
