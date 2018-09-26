/**
 * Promise 队列化
 *
 * @author spraylee <spraylee@qq.com>
 * @data 2018-08-29
 *
 * @description
 *   创建一个队列，添加一个个生成promise方法和参数，内部会按照顺序，依次执行生成promise的方法.
 *   常用于弹出框的队列化
 *   reject 不会中断队列的执行
 *
 * @param {ojbect} config            配置对象，可以省略
 * @param {Number} config.interval   两个promise执行的最短间隔(ms), 默认 0 ms
 *
 * @example
 *   const queue = new PromiseQueue({ interval: 200 })
 *   // 假定comfirmBox返回的是一个promise
 *   const confirm = (...args) => queue.add(comfirmBox, args)
 *   // 确认框会逐个进行弹出,每个弹出框之间至少200ms间隔
 *   confirm({ message: 'message', title: 'name' }).then(() => console.log('ok'))
 *   confirm({ message: 'message2', title: 'name2' }).then(() => console.log('ok')).catch(err => console.error(err))
 *
 */

export default class PromiseQueue {
  constructor (config = {}) {
    const { interval = 0, } = config
    this.config = { interval }
    this.config = config
    this.isRuning = false
    this.queue = []
  }
  add (func, args) {
    return new Promise((resolve, reject) => {
      this.queue.push({ func, args, resolve, reject })
      if (!this.isRuning) {
        this._checkNext()
      }
    })
  }
  _checkNext () {
    this.isRuning = true
    if (!this.queue.length) { return this.isRuning = false }
    if (this.queue.length) {
      const { func, args, resolve, reject } = this.queue.shift()
      func(...args).then(data => {
        resolve(data)
      }).catch(err => {
        reject(err)
      }).then(() => {
        if (this.config.interval > 0) {
          setTimeout(() => {
            this._checkNext()
          }, this.config.interval);
        } else {
          this._checkNext()
        }
      })
    }
  }
}
