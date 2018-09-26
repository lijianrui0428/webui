export const changeHeight = (height, spareHeight) => {
  window.onresize = function () {
    height = document.documentElement.clientHeight - spareHeight
  }
}
