// USING THE DOM TO EDIT ELEMENTS ON THE PAGE (AND ADD NEW ONES)

// 1- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll

// examples of targeting indiv. elements (we get the 1st that matches, or null)
const header = document.querySelector('header')
const logoTitle = document.querySelector('#logoTitle')

// example of targeting several elements (we get a collection which might be empty)
const h3s = document.querySelectorAll('h3')

const firstCard = document.querySelector('.card:nth-of-type(1)')
const imageFirstCard = document.querySelector('.card:nth-of-type(1) .card-img-top')
const titleFirstCard = document.querySelector('.card:nth-of-type(1) .card-title')
const subtitleFirstCard = document.querySelector('.card:nth-of-type(1) .card-subtitle')
const textFirstCard = document.querySelector('.card:nth-of-type(1) .card-text')
const link1FirstCard = document.querySelector('.card:nth-of-type(1) card-link')
const link2FirstCard = document.querySelector('.card:nth-of-type(1) card-link')

// 2- Changing an element's text content
//  textContent, innerText (subtle differences)

// 3- Accessing and changing element attributes
//  with dot notation
//  setAttribute, getAttribute

// 4- Changing the style
//  by changing the class names on the element
//  by manipulating inline styles on the element

// 5- Creating new elements and appending them

// 6- Removing an existing element and putting it back

// 7- Making a copy of the card and appending it to the card group
