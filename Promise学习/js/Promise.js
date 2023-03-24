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
            callback(onResolved);
        }
        if (this.PromiseState === 'rejected') {
            callback(onRejected);
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

Promise.prototype.catch = function (onRejected) {
    return this.then(undefined, onRejected);

}

//添加resolve方法
Promise.resolve = function (value) {
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

//添加reject方法
Promise.reject = function (reason) {
    return new Promise((resolve, reject) => {
       reject(reason);
    });
}

//添加all方法
Promise.all = function (promise){
    return new Promise((resolve, reject) => {
       //声明变量
        let count = 0;
        //存放的数组
        let arr = [];
        //遍历
        for (let i = 0; i < promise.length;i++){
           promise[i].then(v =>{
               //看它的状态是不是都是成功的
               count++;
               //将当前的成功的内容放到数组中
               arr[i] = v;
               if (count === promise.length){
                   resolve(arr);
               }
           },r => {
               reject(r);
           });
       }
    });
}


