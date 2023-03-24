//重写Promise
class Promise {
    //构造方法
    constructor(executor) {
        //添加属性
        this.PromiseState = 'pending';
        this.PromiseResult = null;
        //定义回调函数
        this.callbacks = [];
        const _this = this;

        //resolve函数
        function resolve(data) {
            //判断状态让它的状态只改变一次
            if (_this.PromiseState !== 'pending') return;
            //1.修改对象的状态(promiseState)
            _this.PromiseState = 'fulfilled';
            //2.设置对象结果值(promiseResult)
            _this.PromiseResult = data;
            //调用成功的回调函数
            setTimeout(() => {
                _this.callbacks.forEach(item => {
                    item.onResolved(data);
                });
            });
        }

        //reject函数
        function reject(data) {
            //判断状态让它的状态只改变一次
            if (_this.PromiseState !== 'pending') return;
            //1.修改对象的状态(promiseState)
            _this.PromiseState = 'rejected';
            //2.设置对象结果值(promiseResult)
            _this.PromiseResult = data;
            //调用成功的回调函数
            setTimeout(() => {
                _this.callbacks.forEach(item => {
                    item.onRejected(data);
                });
            });
        }

        try {
            executor(resolve, reject);
        } catch (e) {
            reject(e);
        }
    }

    //then方法
    then(onResolved, onRejected) {
        const self = this;
        if (typeof onRejected !== 'function') {
            onRejected = reason => {
                throw reason;
            }
        }

        if (typeof onResolved !== 'function') {
            onResolved = value => value;
        }
        return new Promise((resolve, reject) => {
            //封装函数
            function callback(type) {
                try {
                    let result = type(self.PromiseResult);
                    if (result instanceof Promise) {
                        result.then(v => {
                            resolve(v);
                        }, r => {
                            reject(r);
                        });
                    } else {
                        resolve(result);
                    }
                } catch (e) {
                    reject(e);
                }
            }

            //回调的执行
            if (this.PromiseState === 'fulfilled') {
                setTimeout(() => {
                    callback(onResolved);
                });
            }
            if (this.PromiseState === 'rejected') {
                setTimeout(() => {
                    callback(onRejected);
                });
            }
            //判断pending状态
            if (this.PromiseState === 'pending') {
                //如果是异步任务，还没有执行就先保存回调函数
                this.callbacks.push({
                    onResolved: function () {
                        callback(onResolved);
                    },
                    onRejected: function () {
                        callback(onRejected);
                    }
                })
            }
        });
    }

    //catch方法
    catch(onRejected) {
        return this.then(undefined, onRejected);
    }

    //resolve方法
    static resolve(value) {
        return new Promise((resolve, reject) => {
            if (value instanceof Promise) {
                value.then(v => {
                    resolve(v);
                }, r => {
                    reject(r);
                });
            } else {
                resolve(value);
            }
        });
    }

    //reject方法
    static reject(reason) {
        return new Promise((resolve, reject) => {
            reject(reason);
        });
    }

    //all方法
    static all(promise) {
        return new Promise((resolve, reject) => {
            //声明变量
            let count = 0;
            //存放的数组
            let arr = [];
            //遍历
            for (let i = 0; i < promise.length; i++) {
                promise[i].then(v => {
                    //看它的状态是不是都是成功的
                    count++;
                    //将当前的成功的内容放到数组中
                    arr[i] = v;
                    if (count === promise.length) {
                        resolve(arr);
                    }
                }, r => {
                    reject(r);
                });
            }
        });
    }

    //race方法
    static race(promise) {
        return new Promise((resolve, reject) => {
            for (let i = 0; i < promise.length; i++) {
                promise[i].then(v => {
                    resolve(v);
                }, r => {
                    reject(r);
                })
            }
        });
    }
}


