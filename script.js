'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo=document.querySelector('.btn--scroll-to');
const section1=document.querySelector('#section--1');

const tabs=document.querySelectorAll('.operations__tab');
const tabsContainer=document.querySelector('.operations__tab-container');
const tabsContent=document.querySelectorAll('.operations__content');
const nav=document.querySelector('.nav');
///////////////////////////////////////
// Modal window



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
//IMPLEMENTING SMOOTH SCROLLING


btnScrollTo.addEventListener('click',function(e){
  const s1coords=section1.getBoundingClientRect();
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect()); 
  console.log('Current scroll (X/Y)',window.pageXOffset, window.pageYOffset);
  section1.scrollIntoView({behavior: 'smooth'});
});

//------------------------------------
// Page Navigation
// In event delegation we use the fact that events bubble up
//document.querySelectorAll('.nav__link').forEach(function(el){
  //el.addEventListener('click',function(e){
    //e.preventDefault();
    //const id=this.getAttribute('href');
    //console.log(id);
    //document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  //});
//});


//event delegation
// step 1: add event listener to common parent element
// step 2: determine what element originated the event

document.querySelector('.nav__links').addEventListener('click',function(e){
  //console.log(e.target);

  e.preventDefault();
  // Matching strategy

    if(e.target.classList.contains('nav__link'))
    {
      const id=e.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({behavior: 'smooth'});
    }

});

//----------------------------------------

// BUILDING TABBED COMPONENT


tabsContainer.addEventListener('click',function(e){
  const clicked=e.target.closest('.operations__tab');

  if(!clicked)// Gaurd clause
  {
    return;
  }
  // Removing the class for  both the tabs
  tabs.forEach(t=>t.classList.remove('operations__tab--active'));// Clearing operation__tab--active class on all button
  tabsContent.forEach(t=>t.classList.remove('operations__content--active'));
  
  // Activating content area
  clicked.classList.add('operations__tab--active');// Adding operations__tabs--active to the clicked tab
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');

});

//-------------------------------
// Hovering effect/ menu fade animation
const handleHover=function(e,opacity)
{
  if(e.target.classList.contains('nav__link'))
  {
    const link=e.target;
    const up=link.closest('.nav').querySelectorAll('.nav__link');
    const logo=link.closest('.nav').querySelector('img');
    up.forEach(el=>{
      if(el!==link)
      {
        el.style.opacity=this;
      }
    });
    logo.style.opacity=this;
  }
};
nav.addEventListener('mouseover',handleHover.bind(0.35));

nav.addEventListener('mouseout',handleHover.bind(1));

//------------------------

// Implementing sticky navigation

//const initialcord=section1.getBoundingClientRect();
//window.addEventListener('scroll',function(){
//  console.log(window.scrollY);
//  if(window.scrollY > initialcord.top)//
//  {
 //   nav.classList.add('sticky');
//  }
//  else
//  {
//    nav.classList.remove('sticky');
//  }
//});

// Sticky Navigation:Intersection Observer API
//const obsCallBack=function(entries,observer){
//  entries.forEach(entry=>{
    //console.log(entry);
 // })
//};
//const obsOption={
//  root: null, // set it to the target element
//  threshold: [0,0.2],    // %age of intersection at which the observer callback will be called 
//};
//const observer=new IntersectionObserver(obsCallBack,obsOption);
//observer.observe(section1);

const header=document.querySelector('.header');
const navHeight=nav.getBoundingClientRect().height;
const stickyNav=function(entries){
  const [entry]=entries;
  console.log(entry);

  if(!entry.isIntersecting)
  {
    nav.classList.add('sticky');
  }
  else
  {
    nav.classList.remove('sticky');
  }
};
const headerObserver=new IntersectionObserver(stickyNav,{root: null, threshold:0, rootMargin: `-${navHeight}px`});
headerObserver.observe(header);//

// SELECTING ELEMENTS
//console.log(document.documentElement);
//console.log(document.head);
//console.log(document.body);

//const header=document.querySelector('.header');
//const allSelections=document.querySelectorAll('.section');
//console.log(allSelections); 

//document.getElementById('section--1');
//const allButtons=document.getElementsByTagName('button');
//console.log(allButtons);

//console.log(document.getElementsByClassName('btn'));

//Creating and inserting elements

////const message= document.createElement('div');
////message.classList.add('cookie-message');
//message.textContent='We use cookies for improved and better experience';
////message.innerHTML= 'We use cookies for improved and better experience. <button class="btn btn--close-cookie">Got it!</button>';
//header.prepend(message);  // Prepend basically as the first child of header element
////header.append(message);  // Last chile of the header element (element on which method is called)
//header.append(message.cloneNode(true));// Now i can show the same message at top and end of the element

// Delete elements

////document.querySelector('.btn--close-cookie').addEventListener('click',function(){
////  message.remove();
////})

// Styles

////message.style.backgroundColor='#37383d';
////message.style.width='120%';
////message.style.height=Number.parseFloat(getComputedStyle(message).height,10)+30+'px';
//document.documentElement.style.setProperty('--color-primary','orangered');

// Attributes

////const logo=document.querySelector('.nav__logo');
////console.log(logo.src);

////logo.alt='Beautiful minimalist logo';// Setting the attributes value

// Data Attributes
////console.log(logo.dataset.versionNumber); // We use data attributes quite a lot when we work with API and has to store data in datasets.


// IMPLEMENTING SMOOTH SCROLLING

//const btnScrollTo=document.querySelector('.btn--scroll-to');
//const section1=document.querySelector('#section--1');

//btnScrollTo.addEventListener('click',function(e){
  //const s1coords=section1.getBoundingClientRect();
  //console.log(s1coords);
  //console.log(e.target.getBoundingClientRect()); 
  //console.log('Current scroll (X/Y)',window.pageXOffset, window.pageYOffset);
  //section1.scrollIntoView({behavior: 'smooth'});
//});

// Types of event and event handlers

// An event is a type of signal that is genetared by the  ceratin DOM node.

//const h1=document.querySelector('h1');

//h1.addEventListener('mouseenter',function(e){ // Working on mouse enter event  , When we hover over 
  //alert('addEventListener jai mata di');

   
//});

// Event propogation : Bubbling and capturing

//const randomInt=(min,max)=>Math.floor(Math.random()*(max-min+1)+min);
//const randomColor = ()=> `rgb(${randomInt(0,255)}),rgb(${randomInt(0,255)}),rgb(${randomInt(0,255)})`;
//console.log(randomColor(0,255));

//document.querySelector('.nav__link').addEventListener('click',function(e){
  //this.style.backgroundColor=randomColor();
//});

//document.querySelector('.nav__links').addEventListener('click',function(e){
  //console.log('LINK');
//});
//document.querySelector('.nav').addEventListener('click',function(e){
  //console.log('LINK');
//});

// DOM Traversing :- We can select an element based on other element

//const h1=document.querySelector('h1');

// Going downwards: child

//console.log(h1.querySelectorAll('.highlight'));
//console.log(h1.childNodes);
//console.log(h1.children);
//h1.firstElementChild.style.color='white';

// Going upwards: parents

//console.log(h1.parentNode);// direct parent;
//console.log(h1.parentElement);

//h1.closest('.header').style.background='var(--gradient-secondary)';

// Going sideways

//console.log(h1.previousElementSibling);
//console.log(h1.nextElementSibling);

//console.log(hq.previousSibling);

//console.log(h1.parentElement.children);
//[...h1.parentElement.children].forEach(function(el){
//  if(el!==h1)
//  {
//    el.style.transform='scale(0.5)';
//  }
//});



