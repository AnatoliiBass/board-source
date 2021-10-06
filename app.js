const board = document.querySelector('#board')
const SQUARE_NUMBER = 1008
const colors = ['rgb(31, 172, 197)', 'rgb(12, 87, 226)', 'rgb(51, 12, 226)', 'rgb(6, 75, 107)', 'rgb(101, 85, 243)', 'rgb(15, 240, 191)']

for (let i = 0; i < SQUARE_NUMBER; i++) {
   const square = document.createElement('div')
   square.classList.add('square')
   square.addEventListener('mouseover', setColor)
   square.addEventListener('mouseleave', removeColor)
   board.append(square)
}

function setColor(event) {
   const element = event.target
   const color = getRandomColor()
   element.style.backgroundColor = color
   element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(event) {
   const element = event.target
   element.style.backgroundColor = '#1e1e1e'
   element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
   return colors[Math.floor(Math.random() * colors.length)]
}