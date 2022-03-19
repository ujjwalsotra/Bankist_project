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

// Styles

message.style.backgroundColor='#37383d';
message.style.width='120%';
message.style.height=Number.parseFloat(getComputedStyle(message).height,10)+30+'px';
//document.documentElement.style.setProperty('--color-primary','orangered');

// Attributes

const logo=document.querySelector('.nav__logo');
console.log(logo.src);

logo.alt='Beautiful minimalist logo';// Setting the attributes value

// Data Attributes
console.log(logo.dataset.versionNumber); // We use data attributes quite a lot when we work with API and has to store data in datasets.


// IMPLEMENTING SMOOTH SCROLLING

const btnScrollTo=document.querySelector('.btn--scroll-to');
const section1=document.querySelector('#section--1');

btnScrollTo.addEventListener('click',function(e){
  const s1coords=section1.getBoundingClientRect();
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect()); 
  console.log('Current scroll (X/Y)',window.pageXOffset, window.pageYOffset);
  section1.scrollIntoView({behavior: 'smooth'});
});

// Types of event and event handlers

// An event is a type of signal that is genetared by the  ceratin DOM node.

const h1=document.querySelector('h1');

h1.addEventListener('mouseenter',function(e){ // Working on mouse enter event  , When we hover over 
  alert('addEventListener jai mata di');

   
});

// Event propogation : Bubbling and capturing

const randomInt=(min,max)=>Math.floor(Math.random()*(max-min+1)+min);
const randomColor = ()=> `rgb(${randomInt(0,255)}),rgb(${randomInt(0,255)}),rgb(${randomInt(0,255)})`;
//console.log(randomColor(0,255));

document.querySelector('.nav__link').addEventListener('click',function(e){
  this.style.backgroundColor=randomColor();
});

//document.querySelector('.nav__links').addEventListener('click',function(e){
  //console.log('LINK');
//});
//document.querySelector('.nav').addEventListener('click',function(e){
  //console.log('LINK');
//});