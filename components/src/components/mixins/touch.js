const MIN_DISTANCE = 10
function getDirection(x, y) {
  if(x > y && x > MIN_DISTANCE) {
    return 'horizontal'
  }
  if (y > x && y > MIN_DISTANCE) {
    return 'vertical'
  }
}