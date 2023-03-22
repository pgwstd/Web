//重写Promise
function Promise(executor){
    //添加属性
    this.PromiseState = 'pending';
    this.PromiseResult = null;
    const _this = this;
    //resolve函数
    function resolve(data){
        //1.修改对象的状态(promiseState)
        _this.PromiseState = 'fulfilled';
        //2.设置对象结果值(promiseResult)
        _this.PromiseResult = data;
    }

    //reject函数
    function reject(data){
        //1.修改对象的状态(promiseState)
        _this.PromiseState = 'reject';
        //2.设置对象结果值(promiseResult)
        _this.PromiseResult = data;
    }
    executor(resolve, reject);
}

Promise.prototype.then = function (onResolved, onReject){

}