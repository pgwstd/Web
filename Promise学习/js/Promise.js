//重写Promise
function Promise(executor) {
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
        _this.callbacks.forEach(item => {
            item.onResolved(data);
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
        _this.callbacks.forEach(item => {
            item.onRejected(data);
        });
    }

    try {
        executor(resolve, reject);
    } catch (e) {
        reject(e);
    }
}

Promise.prototype.then = function (onResolved, onRejected) {
    const self = this;
    return new Promise((resolve, reject) => {
        //回调的执行
        if (this.PromiseState === 'fulfilled') {
            try {
                let result = onResolved(this.PromiseResult);
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
        if (this.PromiseState === 'rejected') {
            onRejected(this.PromiseResult);
        }
        //判断pending状态
        if (this.PromiseState === 'pending') {
            //如果是异步任务，还没有执行就先保存回调函数
            this.callbacks.push({
                onResolved: function () {
                    try {
                        //执行回调函数
                        let result = onResolved(self.PromiseResult);
                        //判断
                        if (result instanceof Promise) {
                            result.then(v => {
                                resolve(v);
                            }, r => {
                                reject(r);
                            });
                        } else {
                            resolve(result);
                        }
                    }catch (e){
                        reject(e);
                    }
                },
                onRejected: function () {
                    try {
                        let result = onRejected(self.PromiseResult);
                        if (result instanceof Promise) {
                            result.then(v => {
                                resolve(v);
                            }, r => {
                                reject(r);
                            });
                        } else {
                            resolve(result);
                        }
                    }catch (e){
                        reject(e);
                    }
                }
            })
        }
    });
}