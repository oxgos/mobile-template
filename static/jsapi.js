// 本地调试
if (window.location.href.indexOf('localhost') > -1) {
  const tokenJson = '{\\"token\\": \\"dgjkdgjksfjksjfisdjfi43241kljklsdjlkfjs\\", \\"tenantCode\\": \\"4123jsdkfjklsdjfklsdjfkl\\", \\"language\\": \\"zh-ch\\"}'
  window.android = {}
  window.android.getUserInfo = function () {
    return JSON.parse(tokenJson)
  }
  window.webkit = {}
  window.webkit.messageHandlers = {}
  window.webkit.messageHandlers.getUserInfo = {}
  window.webkit.messageHandlers.getUserInfo.postMessage = function () {
    window.nativeCallBack(JSON.parse(tokenJson))
  }
}

window.native = {}
window.native.getUserInfo = function () {
  return window.executeNativeWithReturn({
    methodName: 'getUserInfo',
    params: null,
    hasReturn: true
  })
}
window.native.close = function () {
  window.executeNative({
    methodName: 'close',
    params: null,
    hasReturn: false
  })
}

// 判断系统和判断是否有返回值
window.executeNative = function ({
  methodName,
  params,
  hasReturn
}) {
  if (isAndroid) {
    if (hasReturn) {
      return window.executeAndroidMethodWithReturn(methodName, params)
    } else {
      window.executeAndroidMethod(methodName, params)
    }
  } else if (isIos) {
    if (hasReturn) {
      return window.executeAndroidMethodWithReturn(methodName, params)
    } else {
      window.executeIosMethod(methodName, params)
    }
  } else {
    console.log('不是手机浏览器')
    return Promise.reject(new Error('不是手机浏览器'))
  }
}
/**
 * 没有返回值的ios和android方法
 */
window.executeIosMethod = function (methodName, params) {
  if (window.webkit.messageHandlers[methodName]) {
    if (params) {
      window.webkit.messageHandlers[methodName].postMessage(params)
    } else {
      window.webkit.messageHandlers[methodName].postMessage()
    }
  } else {
    console.warn('[jsapi]: Ios没有注入此方法')
  }
}
window.executeAndroidMethod = function (methodName, params) {
  if (window.android[methodName]) {
    if (params) {
      window.android[methodName](params)
    } else {
      window.android[methodName]()
    }
  } else {
    console.warn('[jsapi]: 安卓没有注入此方法')
  }
}
/**
 * 带有返回值的ios和android方法
 */
window.executeAndroidMethodWithReturn = function (methodName, params) {
  return new Promise((resolve, reject) => {
    if (window.android[methodName]) {
      if (params) {
        resolve(window.android[methodName](params))
      } else {
        resolve(window.android[methodName]())
      }
    } else {
      reject(new Error('安卓没有注入此方法'))
    }
  })
}

const {
  port1,
  port2
} = new MessageChannel()
window.naticeCallBack = function (data) {
  port1.postMessage(data)
}
window.executeIosMethodWithReturn = function (methodName, params) {
  return new Promise((resolve, reject) => {
    if (window.webkit.messageHandlers[methodName]) {
      if (params) {
        window.webkit.messageHandlers[methodName].postMessage(params)
      } else {
        window.webkit.messageHandlers[methodName].postMessage()
      }
      port2.onmessage = function (e) {
        resolve(e.data)
      }
    } else {
      reject(new Error('IOS没有注入此方法'))
    }
  })
}

const isAndroid = (function (win) {
  const ua = win.navigator.userAgent
  const isAndroid = ua.indexOf('andriod') > -1 || ua.indexOf('linux') > -1
  return isAndroid
})(window)

const isIos = (function (win) {
  const ua = win.navigator.userAgent
  const isIos = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  return isIos
})(window)
