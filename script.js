'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


// SELECTING ELEMENTS

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header=document.querySelector('.header');
const allSelections=document.querySelectorAll('.section');
console.log(allSelections); 

document.getElementById('section--1');
const allButtons=document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

//Creating and inserting elements

const message= document.createElement('div');
message.classList.add('cookie-message');
//message.textContent='We use cookies for improved and better experience';
message.innerHTML= 'We use cookies for improved and better experience. <button class="btn btn--close-cookie">Got it!</button>';
//header.prepend(message);  // Prepend basically as the first child of header element
header.append(message);  // Last chile of the header element (element on which method is called)
//header.append(message.cloneNode(true));// Now i can show the same message at top and end of the element

// Delete elements

document.querySelector('.btn--close-cookie').addEventListener('click',function(){
  message.remove();
})