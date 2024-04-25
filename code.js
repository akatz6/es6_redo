// function doesThisWork(str){
//     return str;
// }

const doesThisWork = (str) => {
    return str;
}

console.log(doesThisWork("Does this work"))

const display = () => {
    return "This is display"
}

const moreMessages = (func, mess) => {
    console.log(`${func()} ${mess}`)
}

moreMessages(display, "Again, this is going to display")

const outerFunction = (arr) => {
  const innerFunction = (arr, start, end) => {
    if (start === end) {
      console.log("We are done");
    } else {
      console.log(arr[start]);
      start++;
      innerFunction(arr, start, end);
    }
  };

  return innerFunction(arr, 0, arr.length);
};

outerFunction([1, 2, 3, 4]);

const pureFunction = (number) => number + 5


// const pureFunction = (number) => {
//   return number + 5;
// };
console.log(pureFunction(10));

const curryingAdd = (x) => {
    return function(y){
        return x + y
    }
}

console.log(curryingAdd(3)(5))

const partial = (x) => {
  return function (y) {
    return x + y;
  };
};

const add = partial(3);
console.log(add(7));

const otherStep = (num) => num * 2

const nextStep = (num) =>  num * 25

const multipleSteps = (num) =>  nextStep(otherStep(num))

console.log(multipleSteps(6))

const arr = [300, 1, 2, 3, 4, 5, 6];
const letterArr = ["ab", "aa", "z", "zz", "c", "j"];

for(let i = 0; i < arr.length; i++){
    console.log(`This is the index ${i} and this is the value ${arr[i]}`)
}

arr.forEach((element, index) => console.log(`This is the index ${index} and this is the value ${element}`))

console.log(letterArr.sort())
console.log(arr.sort((a, b) => a - b));

const newArr = arr.map((element) => Math.pow(element, 2));
console.log(newArr)

const filter = arr.filter(element => element >= 5)
console.log(filter)

const reduce = arr.reduce((a,b) => a + b)
console.log(reduce)
