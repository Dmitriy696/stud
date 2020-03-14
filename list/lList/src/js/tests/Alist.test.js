const { AList } = require('../AList');

describe('.init()', () => {
  it('Pass [-2, 1, -5, -7, 1]', () => {
    const aList = new AList([-2, 1, -5, -7, 1]);
    assert.deepEqual(aList.init(), [-2, 1, -5, -7, 1]);
  });
  it('Pass [7, -1, 4, -91, 43, -57]', () => {
    const aList = new AList([7, -1, 4, -91, 43, -57]);
    assert.deepEqual(aList.init(), [7, -1, 4, -91, 43, -57]);
  });
});

describe('.size()', () => {
  it('Pass [-2, 1, -5, -7, 1]', () => {
    const aList = new AList([-2, 1, -5, -7, 1]);
    assert.equal(aList.size(), 5);
  });
  it('Pass [7, -1, 4, -91, 43, -57]', () => {
    const aList = new AList([7, -1, 4, -91, 43, -57]);
    assert.equal(aList.size(), 6);
  });
});

describe('.addStart', () => {
  it('Input 10', () => {
    const aList = new AList([-2, 1, -5, -7, 1]);
    assert.equal(aList.addStart(10), 6);
  });
  it('Input 10', () => {
    const aList = new AList([-2, 1, -5, -7, 1]);
    assert.equal(aList.addStart(1), 6);
  });
});

describe('.addEnd', () => {
  it('Input 5', () => {
    const aList = new AList([10, -2, 1, -5, -7, 1]);
    assert.equal(aList.addEnd(5), 7);
  });
  it('Input 10', () => {
    const aList = new AList([2, -17, 1, -5]);
    assert.equal(aList.addEnd(10), 5);
  });
});

describe('.delStart', () => {
  it('Delete element 10', () => {
    const aList = new AList([10, -2, 1, -5, -7, 1]);
    assert.equal(aList.delStart(), 10);
  });
  it('Delete element 2', () => {
    const aList = new AList([2, -17, 1, -5]);
    assert.equal(aList.delStart(), 2);
  });
});

describe('.delEnd', () => {
  it('Delete element 1', () => {
    const aList = new AList([10, -2, 1, -5, -7, 1]);
    assert.equal(aList.delEnd(), 1);
  });
  it('Delete element -5', () => {
    const aList = new AList([2, -17, 1, -5]);
    assert.equal(aList.delEnd(), -5);
  });
});

describe('.delPos', () => {
  it('Delete element 1', () => {
    const aList = new AList([10, -2, 1, -5, -7, 1]);
    assert.equal(aList.delPos(1), -2);
  });
  it('Delete element -5', () => {
    const aList = new AList([2, -17, 1, -5]);
    assert.equal(aList.delPos(2), 1);
  });
});

describe('.get', () => {
  it('Get element (index = 1)', () => {
    const aList = new AList([10, -2, 1, -5, -7, 1]);
    assert.equal(aList.get(1), -2);
  });
  it('Get element (index = 2)', () => {
    const aList = new AList([2, -17, 1, -5]);
    assert.equal(aList.get(2), 1);
  });
});

describe('.set', () => {
  it('Set 21', () => {
    const aList = new AList([10, -2, 1, -5, -7, 1]);
    aList.set(21, 3);
    assert.deepEqual(aList.get(3), 21);
  });
  it('Set -1', () => {
    const aList = new AList([2, -17, 1, -5]);
    aList.set(-1, 1);
    assert.equal(aList.get(1), -1);
  });
});

describe('.toString', () => {
  it('[10, -2, 1, -5, -7, 1]', () => {
    const aList = new AList([10, -2, 1, -5, -7, 1]);
    assert.equal(aList.toString(), '10-21-5-71');
  });
  it('[2, -17, 1, -5]', () => {
    const aList = new AList([2, -17, 1, -5]);
    assert.equal(aList.toString(), '2-171-5');
  });
});

describe('.min', () => {
  it('Min element of array is -7', () => {
    const aList = new AList([10, -2, 1, -5, -7, 1]);
    assert.equal(aList.min(), -7);
  });
  it('Min element of array is 2', () => {
    const aList = new AList([2, 7, 10, 5]);
    assert.equal(aList.min(), 2);
  });
});

describe('.max', () => {
  it('Max element of array is 10', () => {
    const aList = new AList([10, -2, 1, -5, -7, 1]);
    assert.equal(aList.max(), 10);
  });
  it('Max element of array is 11', () => {
    const aList = new AList([2, 7, 11, 5]);
    assert.equal(aList.max(), 11);
  });
});

describe('.minIndex', () => {
  it('Min index of array is 4', () => {
    const aList = new AList([10, -2, 1, -5, -7, 1]);
    assert.equal(aList.minIndex(), 4);
  });
  it('Min index of array is 0', () => {
    const aList = new AList([2, 7, 11, 5]);
    assert.equal(aList.minIndex(), 0);
  });
});

describe('.maxIndex', () => {
  it('Max index of array is 0', () => {
    const aList = new AList([10, -2, 1, -5, -7, 1]);
    assert.equal(aList.maxIndex(), 0);
  });
  it('Max index of array is 2', () => {
    const aList = new AList([2, 7, 11, 5]);
    assert.equal(aList.maxIndex(), 2);
  });
});

describe('.reverseArray', () => {
  it('Reverse of arr = [10, -2, 1, -5, -7, 1]', () => {
    const aList = new AList([10, -2, 1, -5, -7, 1]);
    assert.deepEqual(aList.reverseArray(), [1, -7, -5, 1, -2, 10]);
  });
  it('Reverse of arr = [2, 7, 11, 5]', () => {
    const aList = new AList([2, 7, 11, 5]);
    assert.deepEqual(aList.reverseArray(), [5, 11, 7, 2]);
  });
});

describe('.halfRevesre', () => {
  it('halfRevesre of arr = [10, -2, 1, -7, 1]', () => {
    const aList = new AList([10, -2, 1, -7, 1]);
    assert.deepEqual(aList.halfRevesre(), [-7, 1, 1, 10, -2]);
  });
  it('halfRevesre of arr = [2, 7, 11, 5]', () => {
    const aList = new AList([2, 7, 11, 5]);
    assert.deepEqual(aList.halfRevesre(), [11, 5, 2, 7]);
  });
});

describe('.sort', () => {
  it('Reverse of arr = [10, -2, 1, -5, -7, 1]', () => {
    const aList = new AList([10, -2, 1, -5, -7, 1]);
    assert.deepEqual(aList.sort(), [-7, -5, -2, 1, 1, 10]);
  });
  it('Reverse of arr = [2, 7, 11, 5]', () => {
    const aList = new AList([2, 7, 11, 5]);
    assert.deepEqual(aList.sort(), [2, 5, 7, 11]);
  });
});
