import { callCallback, callPromise } from '../src/api'


describe('测试异步接口', () => {
  test('1. 测试 callCallback', (done) => {
    callCallback((result:any) => {
      expect(result.code).toBe(0)
      done()
    })
  })

  test('2. 测试 callPromise', () => {
    return callPromise().then((result:any) => {
      expect(result.code).toBe(0)
    })
  })

  test('3. 测试 callPromise async await', async () => {
    const result:any = await callPromise()
    expect(result.code).toBe(0)
  })

  test('4. 测试 callPromise resolves', async () => {
    (expect(callPromise()) as any).resolves.toMatch({code: 0})
  })
})