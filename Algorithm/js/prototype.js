/**
* 方法说明
* @method 数组去重
* @for Array
* @param Array.unique()
* @return 返回值为去重后的数组
*/
Array.prototype.unique = function () {
    let container = {}
    let result = []
    for (let index = 0; index < this.length; index++) {
        const element = this[index];
        if (!container[element]) {
            container[element] = true
            result.push(element)
        }
    }
    return result
}

/**
* 方法说明
* @method 尾递归阶乘
* @for Number
* @param new Number()
* @return 返回计算阶乘后的结果
*/
Number.prototype.factorial = function () {
    [num] = arguments || 1
    if (num <= 1) return 1;
    return num * this.factorial(num - 1);
}