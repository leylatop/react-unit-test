import axios from "axios"
export function exec (callback) {
  callback('123')
  callback('456')
}

export function createInstance(ClassName) {
  return new ClassName()
}

export function getUser() {
  return axios.get('/api/users')
}


export function delay(callback, ms) {
  setTimeout(() => {
    callback(ms)
  }, ms)
}

