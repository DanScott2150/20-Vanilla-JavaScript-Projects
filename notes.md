2. Movie Seat Booking

- CSS pseudoselectors: nth-of-type, nth-last-of-type, not()
- using pseudoselectors in JS queryselector:
  document.querySelectorAll('.row .seat:not(.selected)')
- CSS transform to scale up on mouse hover
- Easy convert string to number: at + sign before:
  const ticketPrice = movieSelect.value; //returns a number as a string
  const ticketPrice = +movieSelect.value; //converts to actual number
- More performant event listeners: For seats, you could loop through all (forEach) and add event listeners to each seat. Better to instead add one click listener to parent-level container, and then on click check if the clicked element is a seat.
- Array method indexOf()
- Localstorage
