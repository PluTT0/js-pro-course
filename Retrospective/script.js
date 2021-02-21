//counter

function createCounter(initialValue = 0) {
  let obj = {

    value: initialValue,

    showValue: function () {
      return obj.value;
    },

    increment: function (step = 1) {
      return obj.value += step;
    },

    decrement: function(step = 1) {
      return obj.value -= step
    },

    discard: function () {
      return obj.value = initialValue;
    },
  }
  return obj
}

const counter = createCounter(5); 
console.log(counter.showValue());
console.log(counter.increment());
console.log(counter.increment(3));
console.log(counter.increment());
console.log(counter.showValue());
console.log(counter.discard());
console.log(counter.increment(7));
console.log(counter.showValue());



//filter

function filter () {
  return Array.from(new Set(arguments));
}

console.log(filter(1,1,1,1,5,5,3,3,4,7,))