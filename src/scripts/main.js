'use strict';

// Select the logo element
const logo = document.querySelector('.logo');

const clickPromise = new Promise((resolve, reject) => {
  const timeoutId = setTimeout(() => {
    reject('Promise was rejected!');
  }, 3000);

  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
    clearTimeout(timeoutId);
  });
});

const messageDiv = document.createElement('div');

document.body.append(messageDiv);

clickPromise
  .then((message) => {
    messageDiv.classList.add('message');
    messageDiv.textContent = message;
  })
  .catch((errorMessage) => {
    messageDiv.classList.add('message', 'error-message');
    messageDiv.textContent = errorMessage;
  });
