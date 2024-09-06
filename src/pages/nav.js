import '../styles/nav.css'
import { gsap } from 'gsap'
import { Flip } from 'gsap/Flip'

gsap.registerPlugin(Flip)

let navLink = document.querySelectorAll('.nav_link')
let navFill = document.querySelector('.nav_fill')
let activeLink = document.querySelector('.nav_link.is--active')

function animateNavFill(targetItem) {
	let state = Flip.getState(navFill)
	targetItem.appendChild(navFill)
	Flip.from(state, {
		duration: 0.2,
		ease: 'power1.inOut',
		absolute: true,
	})
}

function linkHover(item, hover) {
	item.setAttribute('data-hover', hover)
	animateNavFill(item)
}

function setDefault() {
	animateNavFill(activeLink)
}

// Initially set default on page load
setDefault()

// Add event listeners to all nav links
navLink.forEach(function (item) {
	item.addEventListener('mouseenter', () => linkHover(item, 'false'))
	item.addEventListener('mouseleave', () => {
		linkHover(item, 'false')
		setDefault()
	})
})
