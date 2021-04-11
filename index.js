function Stack(limit = 10) {
  this.limit = limit
  // this.items = Array(limit)
  this.items = []
}

Stack.prototype.push = function(item) {
  if (this.isFull()) {
    // throw new Error('Stack limit reached')
    return -1
  }
  this.items[this.items.length] = item
  return 1
}

Stack.prototype.pop = function() {
  const item = this.items[this.items.length - 1]
  this.items = this.items.splice(0, this.items.length - 1)
  return item
}

Stack.prototype.size = function() {
  return this.items.length
}

Stack.prototype.isEmpty = function() {
  return this.size() === 0
}

Stack.prototype.isFull = function() {
  return this.size() === this.limit
}

module.exports = Stack
