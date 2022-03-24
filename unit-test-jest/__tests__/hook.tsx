let count = 0
describe('钩子函数测试', () => {
  beforeAll(() => {
    console.log('beforeAll')
    count++
  })

  beforeEach(() => {
    console.log('beforeAll')
    count++
  })

  afterAll(() => {
    console.log('beforeAll')
    count++
    expect(count).toBe(8)
  })

  afterEach(() => {
    console.log('beforeAll')
    count++
  })

  describe('测试用例', () => {
    test('测试用例1', () => {
      console.log('beforeAll')
      count++
    })
    test('测试用例2', () => {
      console.log('beforeAll')
      count++
    })
  })
})