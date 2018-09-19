/**
 * -----------------------------------------------------
 * cookie操作 
 * -----------------------------------------------------
 */
function get (key) {
  var item = document.cookie.split(/\s*;\s*/).find(item => {
    return key === item.split('=')[0]
  })
  if (!item) {
    return ''
  }
  return window.decodeURIComponent(item.split('=')[1])
}


export default { get }