const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value = '') {
    this.arr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if(position > 0 && position <= this.getLength() && typeof position === 'number') {
      this.arr.splice(position - 1, 1);
      return this;
    } else {
      this.arr.length = 0;
      throw Error('Incorrect value')
    }
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    const restultArr = this.arr.slice();
    this.arr = [];
    return restultArr.join('~~');
  }
};


module.exports = chainMaker;
