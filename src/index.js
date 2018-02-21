class Sorter {
  constructor() {
    this.storage=[];
    this.comparator=(a,b)=>{return a-b}
  }

  add(element) {
    this.storage.push(element);
  }

  at(index) {
    return this.storage[index];
  }

  get length() {
    return this.storage.length;
  }

  toArray() {
   return this.storage;
  }

  sort(indices) {
    indices.sort((a,b)=>{return a-b})
    let arr2=[];
    indices.forEach((elem)=>{
      arr2.push(this.storage[elem])
    })
    arr2.sort(this.comparator);
    indices.forEach((elem,index)=>{
      this.storage[elem]=arr2[index]
    })
  }

  setComparator(compareFunction) {
    this.comparator=compareFunction
      }
}

module.exports = Sorter;