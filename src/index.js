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
const imageFirstCard = firstCard.querySelector('.card-img-top')
const titleFirstCard = firstCard.querySelector('.card-title')
const subtitleFirstCard = firstCard.querySelector('.card-subtitle')
const textFirstCard = firstCard.querySelector('.card-text')
const link1FirstCard = textFirstCard.nextElementSibling
const link2FirstCard = link1FirstCard.nextElementSibling

// 2- Changing an element's text content
//  textContent, innerText (subtle differences)
logoTitle.textContent = 'Lambda Dog'
titleFirstCard.textContent = 'Good Dog'
subtitleFirstCard.textContent = 'Obviously'
textFirstCard.innerText = 'Doggo ipsum very taste wow blep vvv maximum borkdrive puggo, you are doing me a frighten h*ck. I am bekom fat pupperino puggo, such treat. Noodle horse heck fat boi smol borking doggo with a long snoot for pats, corgo shibe.'
link2FirstCard.textContent = 'Dog Ipsum'

// 3- Accessing and changing element attributes
//  with dot notation
header.className = 'foo bar baz sky'
header.id = 'theHeader'
imageFirstCard.src = 'https://images.unsplash.com/photo-1534628526458-a8de087b1123?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'

//  setAttribute, getAttribute
header.setAttribute('class', 'lady gaga')
header.setAttribute('id', 'betterHeaderId')
imageFirstCard.setAttribute('src', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*')

console.log(header.id)
console.log(header.getAttribute('id'))

// 4- Changing the style
//  by changing the class names on the element
header.classList.add('sky')
// header.classList.remove('sky')
//  by manipulating inline styles on the element

// 5- Creating new elements and appending them

// 6- Removing an existing element and putting it back

// 7- Making a copy of the card and appending it to the card group
