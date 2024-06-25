export class List {
  constructor(private readonly items: unknown[] = []) {}
  
  public static create<T>(...items: T[]): List {
    return new List([...items])
  }

  public append(list: List): List {
    return List.create(...this.items, ...list.items)
  }

  public concat(list: List): List {
    return list.foldl<List, List>((concatenatedList, currentList) => concatenatedList.append(currentList), this) 
  }

  public filter<T>(fn: (item: T) => boolean): List {
    return List.create<T>(...this.foldl<T, T[]>((newList, item) => fn(item) ? [...newList, item] : newList, []))
  }

  public map<T>(fn: (item: T) => T): List {
    return List.create<T>(...this.foldl<T, T[]>((newList, item) => [...newList, fn(item)], []))
  }

  public reverse(): List {
    return List.create(...this.foldl<unknown, unknown[]>((acc, el) => [el, ...acc], []))
  }

  public foldl<T, U>(fn: (output: U, item: T) => U, initial: U): U {
    let output = initial
    this.items.forEach((item) => {
      output = fn(output, item as T)
    })
    return output
  }

  public foldr<T, U>(fn: (output: U, item: T) => U, initial: U): U {
    return this.reverse().foldl(fn, initial)
  }

  public forEach(fn: (item: unknown) => void) {
    for (const item of this.items) {
      fn(item)
    }
  }

  public length(): number {
    return this.foldl<number, number>((size) => size + 1, 0)
  }
}
