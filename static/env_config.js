// 根据不同环境配置公共的变量
if (window.location.href.indexOf('localhost') > -1) {
  window.envConfig = {
    hasConsole: true
  }
} else {
  window.envConfig = {
    hasConsole: false
  }
}