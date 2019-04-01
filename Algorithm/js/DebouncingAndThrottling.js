/**
 * 函数防抖 (只执行最后一次点击)
 * @param fn
 * @param delay
 * @returns {Function}
 * @constructor
 * window.addEventListener('scroll', Debouncing(handle, 1000));
 */

export function Debouncing(fn, delay, immediate) {
  let timer
  delay = delay || 200
  immediate = immediate || false
  return function () {
    if (immediate) {
      fn.apply(this, arguments)
    }
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, delay);
  }
}

/**
 * 函数节流（定时器方式）
 * @param fn
 * @param interval
 * @returns {Function}
 * @constructor
 * window.addEventListener('scroll', ThrottlingTimer(handle, 1000));
 */

export function ThrottlingTimer(fn, delay) {
  let timer
  delay = delay || 200
  return function () {
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, arguments)
        timer = null
      }, delay);
    }
  }
}

/**
 * 函数节流（时间戳方式）
 * @param fn
 * @param interval
 * @returns {Function}
 * @constructor
 * window.addEventListener('scroll', ThrottlingPrev(handle, 1000));
 */

export function ThrottlingPrev(fn, delay) {
  let prevTime = Date.now()
  delay = delay || 200
  return function () {
    let nowTime = Date.now()
    if (nowTime - prevTime >= delay) {
      timer = setTimeout(() => {
        fn.apply(this, arguments)
        timer = null
      }, delay);
    }
  }
}


/**
 * 函数节流（定时器+时间戳方式）
 * @param fn
 * @param interval
 * @returns {Function}
 * @constructor
 * window.addEventListener('scroll', Throttling(handle, 1000));
 */

export function Throttling(fn, delay) {
  let timer
  let startTime = Date.now()
  return function () {
    let nowTime = Date.now()
    let runTime = delay - (nowTime - startTime)
    if (timer) clearTimeout(timer)
    if (runTime <= 0) {
      fn.apply(this, arguments)
    } else {
      timer = setTimeout(fn, runTime);
    }
  }
}