
function shakeObject() {
    const object = document.querySelector('.nineeeven');
    
    // Set the duration and intensity of the shake animation
    const duration = 1000; // 1 second
    const intensity = 10; // 10 pixels
    
    const startX = parseFloat(getComputedStyle(object).left);
    const startY = parseFloat(getComputedStyle(object).top);

    const startTime = performance.now();

    function animateShake(currentTime) {
        const elapsedTime = currentTime - startTime;

        if (elapsedTime < duration) {
            const progress = (elapsedTime / duration);
            const randomX = (Math.random() - 0.5) * 2 * intensity;
            const randomY = (Math.random() - 0.5) * 2 * intensity;
            
            object.style.left = startX + randomX + 'px';
            object.style.top = startY + randomY + 'px';

            requestAnimationFrame(animateShake);
        } else {
            // Animation is complete, reset object position
            object.style.left = startX + 'px';
            object.style.top = startY + 'px';
        }
    }

    requestAnimationFrame(animateShake);
}function calculateFactorial(n) {
    if (n <= 1) {
      return 1;
    }
    return n * calculateFactorial(n - 1);
  }
  
  function generateFibonacciSequence(n) {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
  }
  
  function isNumberPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function reverseText(text) {
    return text.split("").reverse().join("");
  }
  
  function generateRandomNumberArray(length) {
    const randomArray = [];
    for (let i = 0; i < length; i++) {
      randomArray.push(Math.floor(Math.random() * 100));
    }
    return randomArray;
  }
  
  const number = 5;
  console.log(`The factorial of ${number} is ${calculateFactorial(number)}`);
  
  const fibonacciLength = 10;
  console.log(`Here's a Fibonacci sequence of ${fibonacciLength} numbers: ${generateFibonacciSequence(fibonacciLength)}`);
  
  const primeCandidate = 17;
  console.log(`Is ${primeCandidate} a prime number? ${isNumberPrime(primeCandidate) ? "Yes" : "No"}`);
  
  const textToReverse = "Hello, World!";
  console.log(`Reversed text: ${reverseText(textToReverse)}`);
  
  const randomArrayLength = 5;
  console.log(`A random array of numbers: ${generateRandomNumberArray(randomArrayLength)}`);
  