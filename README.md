## 前端整理

### 基础
 - js方法
 - - [数组方法扩展](https://github.com/hou1183633065/web_organize_notes/blob/master/Algorithm/js/prototype/Array.js)
 - - [对象方法扩展](https://github.com/hou1183633065/web_organize_notes/blob/master/Algorithm/js/prototype/Object.js)

 - js封装整理类
 - - [时间戳转换指定格式时间](https://github.com/hou1183633065/web_organize_notes/blob/master/Algorithm/js/DateFomatter.js)
 
 - [函数防抖、节流](https://github.com/hou1183633065/web_organize_notes/blob/master/Algorithm/js/DebouncingAndThrottling.js)
 - - 函数防抖(Throttling)
> 当持续触发时间时，一定的时间段内没有再触发事件，事件处理函数会执行一次，如果在没有到达设定的事件，又多次触发事件，则重新开始延时，只会执行最后一次事件触发的函数。
 - - 函数节流(Debouncing)
> 当持续触发时间时，保证一定时间段内只调用一次函数。
---
 - - ***总结***

> ***函数防抖：*** 在以delay为周期的时长中，多次调用，只会执行最后一次

> ***函数节流：*** 每个周期内函数都会被执行一次，同一个周期不会执行多次

> ***区别：*** 函数防抖不管事件在规定时间内调用多少次，最终只会在最后一次调用时执行，事件节流不管事件触发有多频繁，都会保证规定时间内会被执行一次事件处理函数

 - [函数柯里化(Currying)](https://github.com/hou1183633065/web_organize_notes/blob/master/Algorithm/js/DebouncingAndThrottling.js)
 > 柯里化是把接收多个参数变换成接受一个单一参数的函数，并且返回接受余下的参数切返回结果的新函数的技术。

### 算法
 - 算法
### 架构
