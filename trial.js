//-----PROJECT EULER QUESTIONS-----//

// QUESTION 1: MULTIPLES OF 3 OR 5
function sumOfMultiples(num, total = 0) {
  if (num < 3) {
    return total;
  }
  if ((num - 1) % 3 === 0 || (num - 1) % 5 === 0) {
    total += num - 1;
  }
  return sumOfMultiples(num - 1, (total = total));
}

// QUESTION 2: EVEN FIBONACCI NUMBERS
function fibsRec(num1 = 1, num2 = 2, total = 0) {
  if (num1 > 4000000) {
    return total;
  }
  if (num1 % 2 === 0) {
    total += num1;
  }
  return fibsRec(num2, num1 + num2, total);
}

// QUESTION 3: LARGEST PRIME FACTOR OF A NUMBER

function largestPrimeFactor(number, factor = 2) {
  if (number <= 1) {
    return -1; // No prime factors for numbers less than or equal to 1
  }

  if (factor * factor > number) {
    return number; // 'number' itself is prime, return it as the largest prime factor
  }

  if (number % factor === 0) {
    // If 'factor' is a factor of 'number'
    while (number % factor === 0) {
      number /= factor; // Divide 'number' by 'factor' until it's no longer divisible
    }
  }

  return largestPrimeFactor(number, factor + 1);
}

//QUESTION 4: LARGEST PALINDROME PRODUCT

function isPalindrome(number) {
  const numString = number.toString();
  const reversedString = numString.split('').reverse().join('');
  return numString === reversedString;
}

function largestPalindromeProduct() {
  let largestPalindrome = 0;

  for (let i = 100; i <= 999; i++) {
    for (let j = 100; j <= 999; j++) {
      const product = i * j;
      if (isPalindrome(product) && product > largestPalindrome) {
        largestPalindrome = product;
      }
    }
  }

  return largestPalindrome;
}

function findLargestPalindrome2(i, j, largestPalindrome) {
  if (i < 100) {
    return largestPalindrome;
  }

  if (j < 100) {
    return findLargestPalindrome2(i - 1, 999, largestPalindrome);
  }

  const product = i * j;
  if (isPalindrome(product) && product > largestPalindrome) {
    largestPalindrome = product;
  }

  return findLargestPalindrome2(i, j - 1, largestPalindrome);
}

function largestPalindromeProduct() {
  return findLargestPalindrome2(999, 999, 0);
}


console.log(largestPalindromeProduct());

//QUESTION 5: SMALLEST MULTIPLE OF NUMBERS

function smallestMultiple(range) {
  // Function to find the greatest common divisor (GCD) of two numbers
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  // Function to find the least common multiple (LCM) of two numbers
  const lcm = (a, b) => (a * b) / gcd(a, b);

  // Function to find the LCM of a range of numbers
  const lcmRange = (start, end) => {
    let result = start;
    for (let i = start + 1; i <= end; i++) {
      result = lcm(result, i);
    }
    return result;
  };

  // Call the LCM function for the given range
  return lcmRange(1, range);
}
