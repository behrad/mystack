function Stack() {
  this.items = []
}

Stack.prototype.push = function(item) {
  this.items[this.items.length] = item
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

module.exports = Stack
