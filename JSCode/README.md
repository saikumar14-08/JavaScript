# Deepcopying of an object.
const DeepCopy = (obj) => {
  if(typeof obj !== 'object' || obj === null) return obj;
  const deepCpy = Array.isArray(obj) ? [] : {};
  for(let key in obj) {
    let val = obj[key];
    deepCpy[key] = DeepCopy(val);
  }
  return deepCpy
}
# Memoization
# Debouncing
# Throttling
# Currying

## Polyfills
# map
# filter
# reduce
# forEach
# Array.prototype.flat
# flatMap
# some
# every
# find
# findIndex
# slice
# splice
# Object.freeze
# Object.seal
# Promise
# Promise.all
# Promise.race
# Promise.allSettled
# Array.isArray()
# call
# apply
# bind
# compose
# pipe
# String.prototype.repeat
# 