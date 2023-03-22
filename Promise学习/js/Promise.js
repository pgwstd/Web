//重写Promise
function Promise(executor){
    //resolve函数
    function resolve(data){

    }

    //reject函数
    function reject(data){

    }
    executor(resolve, reject);
}

Promise.prototype.then = function (onResolved, onReject){

}