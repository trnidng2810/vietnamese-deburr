const deburr = require('./deburr')

test("deburr 'déjà vu'", () => {
  expect(deburr('déjà vu')).toEqual('deja vu')
})
