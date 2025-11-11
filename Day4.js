//In day 4 we learned about Time Complexity and Space Complexity in algorithms.

//Time Complexity refers to the amount of time an algorithm takes to complete as a function of the length of the input. 
//It is often expressed using Big O notation, which classifies algorithms according to their worst-case or average-case performance. 
//Common time complexities include O(1) (constant time), O(log n) (logarithmic time), O(n) (linear time), O(n log n) (linearithmic time), and O(n^2) (quadratic time).

//Space Complexity, on the other hand, refers to the amount of memory an algorithm uses in relation to the size of the input data. 
//Like time complexity, space complexity is also expressed using Big O notation. 
//It considers both the fixed part of the memory usage (which does not change with input size) and the variable part (which does change with input size).

//Understanding both time and space complexity is crucial for designing efficient algorithms that can handle large datasets effectively.

//Example of Time Complexity
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // O(n) time complexity
        }
    }
    return -1;
}

//Example of Space Complexity
function createArray(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(i); // O(n) space complexity
    }
    return arr;
}

//In summary, time complexity measures how the execution time of an algorithm scales with input size, while space complexity measures how the memory usage scales with input size. Both are essential for evaluating the efficiency of algorithms.      