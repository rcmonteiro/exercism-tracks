class Node<T> {
  constructor(
    public data: T,
    public next?: Node<T>,
    public prev?: Node<T>,
  ) { }
}

export class LinkedList<T> {

  private firstNode?: Node<T>
  private lastNode?: Node<T>
  private size: number = 0

  public pop(): T { 
    const data = this.lastNode?.data
    if (!data)  {
      throw new Error('List is empty')
    }
    this.delete(data)
    return data
  }

  public shift(): T {
    const data = this.firstNode?.data
    if (!data) {
      throw new Error('List is empty')
    }
    this.delete(data)
    return data
  }

  public push(element: T): void {
    const newNode = new Node<T>(element, undefined , this.lastNode)

    if (!this.lastNode) {
      this.firstNode = newNode
    } else {
      this.lastNode.next = newNode
    }

    this.lastNode = newNode
    this.size++
  }

  public unshift(element: T): void {
    const newNode = new Node<T>(element, this.firstNode, undefined)

    if (!this.firstNode) {
      this.lastNode = newNode
    } else {
      this.firstNode.prev = newNode
    }
    this.firstNode = newNode
    this.size++
  }

  public delete(element: T): void {
    if (this.size === 0) {
      throw new Error('List is empty')
    }

    if (this.firstNode?.data === element) {
      this.firstNode = this.firstNode?.next
      if (this.size === 1) {
        this.lastNode = undefined
      }
      this.size--
      return
    }

    if (this.lastNode?.data === element) {
      this.lastNode = this.lastNode?.prev
      if (this.size === 1) {
        this.firstNode = undefined
      }
      this.size--
      return
    }

    let currentNode = this.firstNode
    while (currentNode?.next) {
      currentNode = currentNode?.next
      if (currentNode?.data === element) {
        currentNode!.prev!.next = currentNode.next
        currentNode!.next!.prev = currentNode.prev 
        this.size--
        return
      }
    }
  }

  public count(): number {
    return this.size
  }
}
