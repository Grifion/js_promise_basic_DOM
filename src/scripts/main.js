'use strict';

const logo = document.querySelector('.logo');

const clickPromis = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });

  setTimeout(() => {
    // eslint-disable-next-line prefer-promise-reject-errors
    reject('Promise was rejected!');
  }, 3000);
});

const div = document.createElement('div');

document.body.append(div);

clickPromis
  .then((message) => {
    div.classList.add('message');
    div.textContent = message;
  })
  .catch((errorMessage) => {
    div.classList.add('message', 'error-message');
    div.textContent = errorMessage;
  });
