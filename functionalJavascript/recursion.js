function reduce(arr, fn, initial) {
  if(!arr.length) return initial;
  let head = arr[0];
  let tail = arr.slice(1);
  let result = fn(initial, head, 0, tail);
  return reduce(tail, fn, result);
}

module.exports = reduce