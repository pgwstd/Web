//重写Promise
function Promise(executor) {
    //添加属性
    this.PromiseState = 'pending';
    this.PromiseResult = null;
    const _this = this;

    //resolve函数
    function resolve(data) {
        //判断状态让它的状态只改变一次
        if (_this.PromiseState !== 'pending') return;
        //1.修改对象的状态(promiseState)
        _this.PromiseState = 'fulfilled';
        //2.设置对象结果值(promiseResult)
        _this.PromiseResult = data;
    }

    //reject函数
    function reject(data) {
        //判断状态让它的状态只改变一次
        if (_this.PromiseState !== 'pending') return;
        //1.修改对象的状态(promiseState)
        _this.PromiseState = 'rejected';
        //2.设置对象结果值(promiseResult)
        _this.PromiseResult = data;
    }

    try {
        executor(resolve, reject);
    } catch (e) {
        reject(e);
    }
}

Promise.prototype.then = function (onResolved, onReject) {
    //回调的执行
    if (this.PromiseState === 'fulfilled'){
        onResolved(this.PromiseResult);
    }
    if (this.PromiseState === 'rejected'){
        onReject(this.PromiseResult);
    }
}