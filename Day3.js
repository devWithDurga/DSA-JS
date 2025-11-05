//find the count for given character

function digitCount(n) {
  if (n === 0) return 1;
  Math.abs(n);
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}
console.log(digitCount(0));

// String palandrome

function palandrome(str) {
  let rev = "";
  str = str.toLowerCase();
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  console.log("rev: " + rev);

  if (rev != str) {
    return false;
  } else {
    return true;
  }
}
console.log(palandrome("Racecar"));

//Numebr Palandrome

function palindromeNumber(num) {
  let original = num;
  let reversed = 0;

  while (num > 0) {
    let digit = num % 10; // get last digit
    reversed = reversed * 10 + digit; // build reversed number
    num = Math.floor(num / 10); // remove last digit
  }
  console.log("Original: " + original, "reversed: " + reversed);
  return original === reversed;
}
console.log(palindromeNumber(12345));

//Reverse a string

function reverseString(str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  return rev;
}
console.log("reverseString", reverseString("Hello World"));

// Reverse a number

function reverseNumber(n) {
  let actual = n;
  n = Math.abs(n);
  let rev = 0;
  while (n > 0) {
    let rem = n % 10;
    rev = rev * 10 + rem;
    n = Math.floor(n / 10);
  }
  return actual < 0 ? `-${rev}` : rev;
}
console.log("reverseNumber", reverseNumber(-123));
