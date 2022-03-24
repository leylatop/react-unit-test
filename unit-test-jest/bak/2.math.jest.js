let {
  add,
  minus,
  mul,
  divide
} = require('./math')

describe('测试add', () => {
  it('测试 2+ 2', () => {
    expect(add(2, 4)).toBe(6)
  })
  
  it('测试1+3', () => {
    expect(add(1, 3)).toBe(4)
  })
})

describe('测试minus', () => {
  it('测试 2 - 2', () => {
    expect(minus(2, 4)).toBe(-2)
  })
  
  it('测试4-3', () => {
    expect(minus(4, 3)).toBe(1)
  })
})

describe('测试mul', () => {
  it('测试 2* 2', () => {
    expect(mul(2, 2)).toBe(4)
  })
  
  it('测试 1* 4', () => {
    expect(mul(1, 4)).toBe(4)
  })
})

