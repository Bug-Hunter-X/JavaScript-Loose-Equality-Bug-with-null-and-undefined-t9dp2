function foo(a) {
  if (a == null) {
    return 0;
  }
  return a.length;
}

console.log(foo(null)); // 0
console.log(foo(undefined)); // TypeError: Cannot read properties of undefined (reading 'length')