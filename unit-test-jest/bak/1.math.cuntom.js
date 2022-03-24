let {
  add,
  minus,
  mul,
  divide
} = require('./math')

function describe(message, testSuite) {
  testSuite()
}

const it = test = function (message, testCase) {
  testCase()
}

function assert(condition, message) {
  if (!condition) throw new Error(message)
}

describe('测试add', () => {
  it('测试 2+ 2', () => {
    assert(add(2, 2) === 4, '2+2 !== 4')
  })
  
  it('测试1+3', () => {
    assert(add(1, 3) === 4, '1+3 !== 4')
  })
})

describe('测试mul', () => {
  it('测试 2* 2', () => {
    assert(mul(2, 2) === 4, '2*2 !== 4')
  })
  
  it('测试 1* 4', () => {
    assert(mul(1, 4) === 4, '1*4 !== 4')
  })
})

