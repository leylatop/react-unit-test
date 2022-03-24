import axios from 'axios'
import { exec, createInstance, getUser, delay } from '../src/mock'
jest.mock('axios') // 让jest模拟axios请求

test('测试exec', () => {
  let callback = jest.fn()
  callback.mockReturnValue('abc') //期望方法调用后的返回值
  callback.mockReturnValue('def')
  exec(callback)

  expect(callback).toBeCalled() //方法是否被调用过
  expect(callback).toBeCalledTimes(2) //方法被调用的次数
  expect(callback).toBeCalledWith('123') //以xxx参数被调用的
  expect(callback).toBeCalledWith('456') //以xxx参数被调用的

  console.log(callback.mock)
})

test('测试 createInstance', () => {
  let callback = jest.fn()
  createInstance(callback)
  console.log(callback.mock)
})

test('测试 getUser', async() => {
  (axios.get as any).mockResolvedValue({ data: { code: 0 } }) //模拟服务器返回值
  let result = await getUser()
  expect(result.data).toEqual({ code: 0 })
})

// jest.useFakeTimers() //使用一个假的定时器
// test('测试delay', async (done) => {
//   delay(result => {
//     expect(result).toBe(5000)
//     done()
//   }, 5000)
//   jest.runAllTimers()
// })

jest.useFakeTimers() //使用一个假的定时器
test('测试delay', (done) => {
    delay((result) => {
        expect(result).toBe(1000);
        done();
    }, 1000);
    jest.runAllTimers();
});