import VConsole from 'vconsole'
let vconsole
if (window.envConfig.hasConsole) {
  vconsole = new VConsole()
}
export default vconsole
