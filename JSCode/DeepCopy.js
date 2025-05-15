const DeepCopy = (obj) => {
  if(typeof obj !== 'object' || obj === null) return obj;
  const deepCpy = Array.isArray(obj) ? [] : {};
  for(let key in obj) {
    let val = obj[key];
    deepCpy[key] = DeepCopy(val);
  }
  return deepCpy
}

const OrigObj = {
  one: 1,
  two: 2,
  three: {
    four: 4,
    five: 5
  }
}

const DeepCopyObj = DeepCopy(OrigObj);
OrigObj.three["four"] = 44;
console.log(OrigObj, DeepCopyObj)