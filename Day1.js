//Main Array
let arr = [1, 2, -3, 4, 5, -6, 7, 8, -9, 0];
let arr1 = [6,4,5,5,6,6]

//Find negative values in array and finds the length of it.
function negatveNumber(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count = count + 1;
    }
  }
  return count;
}

console.log("negatveNumber", negatveNumber(arr));

//find a number in array which has largest number in array

function LargestNumber(arr) {
  let LargestNumber = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > LargestNumber) {
      LargestNumber = arr[i]
    }
  }
  return LargestNumber;
}
console.log("LargestNumber", LargestNumber(arr));

//find a number in array which has smallest number in array

function Smallest(arr) {
  let smallest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i]
    }
  }
  return smallest;
}
console.log("Smallest", Smallest(arr));

//find second largest number in array
function SecondLargest(arr) {
  if(arr.length <2 ){
    return null
  }
  let first = -Infinity;
  let second = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] != first) {
      second = arr[i];
    }
  }
  return second
}

console.log(SecondLargest(arr1));
