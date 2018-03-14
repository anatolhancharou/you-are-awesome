// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => {return propertyName;};

const createNotEnumerableProperty = (propertyName) => {
  Object.defineProperty(Object.prototype, propertyName, {
    get() {return Object.prototype.propertyName},
    set(propertyName) {Object.prototype.propertyName = propertyName}
  });
  return propertyName;
};

const createProtoMagicObject = () => {
  let magicObject = function() {};
  magicObject.prototype = magicObject.__proto__;
  return magicObject;
};

let counts = 0;
const incrementor = () => {
  counts++;
  incrementor.valueOf = function() {
    return counts;
  }    
  return incrementor;
};

let asyncCount = 0;
const asyncIncrementor = () => {
  return new Promise(function(resolve) {resolve(++asyncCount);});
};

let incrementer = {
  value: 0,
  next: function() {
    incrementer.value++;
    return this;
  }
}
incrementer[Symbol.iterator] = function() {
  return incrementer;
}
const createIncrementer = () => {
  return incrementer;
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (parameter) => {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(parameter);
    }, 1000);
  });
};

const getDeepPropertiesCount = (object) => {    
  let array = JSON.stringify(object).match(/:/g);
  return array.length;
};

const createSerializedObject = () => {
  return new Object("");
};

const toBuffer = () => {};

const sortByProto = (array) => {return array.sort();};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;