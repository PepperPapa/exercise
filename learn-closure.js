// learn from http://www.cheris.cn/1285.html
// ==========phase 1.0
var counter = 0;
function increment() {
  counter += 1;
  console.log("Number of events: " + counter);
}
// test code:
// increment();
// increment();
// increment();

// ==========pphase 2.0
var counter1 = 0;
function incrementCounter1() {
  counter1 += 1;
  console.log("Number of events: " + counter1);
}

var counter2 = 0;
function incrementCounter2() {
  counter2 += 1;
  console.log("Number of events: " + counter2);
}

// test code:
// incrementCounter1();
// incrementCounter2();
// incrementCounter1();

// ==========pphase 3.0
function createCounter() {
  var counter = 0;
  
  function increment() {
      counter += 1;
      console.log("Number of events: " + counter);
  }
  return increment;
}

// test code
// var counter1 = createCounter();
// var counter2 = createCounter();
// counter1();
// counter1();
// counter2();
// counter1();

// ==========pphase 4.0 为计数器命名
function createCounter(counterName) {
  var counter = 0;
  
  function increment() {
      counter += 1;
      console.log("Number of " + counterName + ": " + counter);
  }
  return increment;
}

// test code
// var catCounter = createCounter("cat");
// var dogCounter = createCounter("dog");
// catCounter();
// catCounter();
// dogCounter();
// catCounter();

// ==========pphase 5.0  改善公共接口
function createCounter(counterName) {
  var counter = 0;
  
  function increment() {
      counter += 1;
      console.log("Number of " + counterName + ": " + counter);
  }
  
  function decrement() {
      counter -= 1;
      console.log("Number of " + counterName + ": " + counter);
  }
  return {
    'increment': increment,
    'decrement': decrement
  };
}

// test code
// var dogCounter = createCounter("dog");
// dogCounter.increment();
// dogCounter.increment();
// dogCounter.decrement();

// ==========pphase 6.0  隐藏计数器行为
function createCounter(counterName) {
  var counter = 0;
  
  function display() {
    console.log("Number of " + counterName + ": " + counter);
  }
  
  function increment() {
      counter += 1;
      display();
  }
  
  function decrement() {
      counter -= 1;
      display();
  }
  return {
    'increment': increment,
    'decrement': decrement
  };
}

// test code
// var dogCounter = createCounter("dog");
// dogCounter.increment();
// dogCounter.increment();
// dogCounter.decrement();
// dogCounter.display(); // ERROR

// ==========pphase 7.0  抽象数据行为
function createStack() {
  var elements = [];
  
  return {
    push: function(el) {
      elements.unshift(el);
    },
    pop: function() {
      return elements.shift();
    },
    elements: function() {
      return elements;
    }
  };
}

var stack = createStack();
stack.push(3);
stack.push(4);
stack.pop(); // pop 4
console.log(stack.elements());


