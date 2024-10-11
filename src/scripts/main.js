'use strict';

// Select the logo element
const logo = document.querySelector('.logo');

// Create a new promise (renamed to clickPromise for clarity)
const clickPromise = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });

  setTimeout(() => {
    // eslint-disable-next-line prefer-promise-reject-errors
    reject('Promise was rejected!');
  }, 3000);
});

// Create and append a div to the body
const div = document.createElement('div');

document.body.append(div);

// Handle the promise resolution or rejection
clickPromise
  .then((message) => {
    div.classList.add('message');
    div.textContent = message;
  })
  .catch((errorMessage) => {
    div.classList.add('message', 'error-message');
    div.textContent = errorMessage;
  });
