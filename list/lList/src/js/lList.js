const {Node} = require('./node');
const lList = require('./list');

function lList(arr) {
    this.defaultArray = arr;
    this.root = null;
    this.init();
}