/**
* 方法说明：数组删除指定项
* @method delete
* @for Array
* @param {index} 对数组的指定{index}下标项进行删除
* @return {this} 该方法会修改原来数组
*/

Array.prototype.delete = function () {
    this.splice(arguments[0], 1)
    return this
}

/**
* 方法说明：数组替换指定项
* @method replace
* @for Array
* @param {index, item} 对数组的指定{index}下标项进行替换为{item}
* @return {this} 该方法会修改原来数组
*/

Array.prototype.replace = function () {
    this.splice(arguments[0], 1, arguments[1])
    return this
}

/**
* 方法说明：数组指定项前面插入元素
* @method appendBefore
* @for Array
* @param {index, item1, item2, item3.......} 在数组的指定{index}下标之前插入{item1, item2, item3......}
* @return {this} 该方法会修改原来数组
*/

Array.prototype.appendBefore = function () {
    for (let i = 1; i < arguments.length; i++) {
        this.splice((arguments[0] + i - 1), 0, arguments[i])
    }
    return this
}

/**
* 方法说明：数组指定项后面插入元素
* @method appendBefore
* @for Array
* @param {index, item1, item2, item3.......} 在数组的指定{index}下标之后插入{item1, item2, item3......}
* @return {this} 该方法会修改原来数组
*/

Array.prototype.appendAfter = function () {
    for (let i = 1; i < arguments.length; i++) {
        this.splice(arguments[0] + i, 0, arguments[i])
    }
    return this
}

/**
* 方法说明：数组去重
* @method unique
* @for Array
* @param {}
* @return 返回值为去重后的数组，该方法不会修改原数组
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
