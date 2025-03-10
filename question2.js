// Function to filter even numbers from an array
function filterEvenNumbers(numbers) {
    // Use the filter method to create a new array containing only even numbers.
    // The filter method iterates through each element and applies the provided condition.
    // The condition 'number % 2 === 0' checks if a number is even.
    return numbers.filter(number => number % 2 === 0);
  }
  
  // Example usage and testing:
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  const evenNumbers = filterEvenNumbers(numbers);
  console.log(evenNumbers); // Output: [2, 4, 6, 8]
  
  // Testing considerations:
  // - Test with an empty array: filterEvenNumbers() should return.
  // - Test with an array containing only odd numbers: filterEvenNumbers([1, 3, 5]) should return.
  // - Test with an array containing only even numbers: filterEvenNumbers([2, 4, 6]) should return [2, 4, 6].
  // - Test with negative numbers: filterEvenNumbers([-2, -1, 0, 1, 2]) should return [-2, 0, 2].