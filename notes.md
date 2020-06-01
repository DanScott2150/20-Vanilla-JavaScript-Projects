2. Movie Seat Booking

- CSS pseudoselectors: nth-of-type, nth-last-of-type, not()
- using pseudoselectors in JS queryselector:
  document.querySelectorAll('.row .seat:not(.selected)')
- CSS transform to scale up on mouse hover. Also CSS 'perspective'
- Easy convert string to number: at + sign before:
  const ticketPrice = movieSelect.value; //returns a number as a string
  const ticketPrice = +movieSelect.value; //converts to actual number
- More performant event listeners: For seats, you could loop through all (forEach) and add event listeners to each seat. Better to instead add one click listener to parent-level container, and then on click check if the clicked element is a seat.
- Array method indexOf()
- Localstorage

3. Custom Video Player

- <video> tag and API, creating custom controls


4. Currency Exchange Rate

- Using SVG: background-image, background-position, background-size, no-repeat
- JSON
- fetch API

5. DOM Array Methods
- Fetch API via async/await, rather than chaining .then()'s
- document.createElement ==> appendChild() vs. append()
- JavaScript Intl API ==> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl
  = Intl.NumberFormat() for easy number formatting
- Array.forEach() and Array.map() [mostly already known]
- Array.sort() and Array.filter()
  - Default sort() method sorts as strings. Which isn't useful for numbers (1, 110, 2, 3, etc). Instead use compare function. Good explanation: https://stackoverflow.com/questions/6567941/how-does-sort-function-work-in-javascript-along-with-compare-function
  - Filter() to remove items
- Array.reduce() - a bit more complicated. Doesn't return array, returns single (accumulated) value.
  - Array.reduce((accum, num) => (accum + num), 0);
  Adds all numbers in array. 0 is starting point.

  6. Menu Slider & Modal
  - CSS heavy. Uses built-in CSS var's
  - CSS
    - transform: translateX(-100%); //push entirely off screen to start
    - cover entire page with position: fixed & top:0 left:0 right:0 bottom:0
    - center modal on page via position absolute, top/left 50%, tranform: translate(-50%, -50%)
    - When toggling nav overlay, use translateX(__px) on body. __px being width of nav
    - Animation via keyframes