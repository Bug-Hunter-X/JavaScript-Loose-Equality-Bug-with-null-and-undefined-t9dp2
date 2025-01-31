function foo(a) {
  if (a === null || a === undefined) {
    return 0;
  }
  return a.length;
}

console.log(foo(null)); // 0
console.log(foo(undefined)); // 0
console.log(foo([1,2,3])); // 3