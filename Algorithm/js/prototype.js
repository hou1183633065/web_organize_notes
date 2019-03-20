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

Number.prototype.factorial = function () {
    console.log(arguments)
    // [num] = arguments || 1
    // if (num <= 1) return 1;
    // return num * this.factorial(num - 1);
}