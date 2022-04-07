class Stack {
  constructor(){
    this.items = []
    this.size = 0
  }

  push(item){
    this.items[this.size] = item
    this.size++
    return this.size - 1
  }

  pop(){
    if(!this.size) {
      return null
    }

    this.size--
    return this.items[this.size]

  }

  print(){
    for(let i = this.size -1; i >= 0; i--){
      console.log(i, this.items[i])
    }
  }
}

const myStack = new Stack()
myStack.push(100)
myStack.push(200)
myStack.push(300)
myStack.push(400)
myStack.push(500)

myStack.print()
console.log('------')
console.log(myStack.pop())
console.log('------')
myStack.print()