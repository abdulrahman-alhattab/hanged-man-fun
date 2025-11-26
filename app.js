const words = [
  'apple',
  'banana',
  'cherry',
  'date',
  'elderberry',
  'fig',
  'grape',
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
  'steak',
  'butter',
  'good',
  'loop',
  'branch',
  'space',
  'blueBerry',
  'home',
  'key',
  'motherboard',
  'sponge',
  'document',
  'clock',
  'food',
  'national',
  'eldenring',
  'indeed',
  'expensive',
  'indubitably',
  'egregious',
  'inevitable',
  'flagrant',
  'blatant',
  'plant',
  'poignant',
  'outrageous',
  'appalling',
  'acrimonious',
  'gregarious',
  'ephemeral',
  'obfuscate',
  'ostentatious',
  'frugal',
  'facetious',
  'hyperbole',
  'capricious',
  'ludicrous',
  'disingenuous',
  'arduous',
  'garrulous',
  'fastidious',
  'fortuitous',
  'meticulous',
  'scrupulous',
  'loquacious',
  'conscientious',
  'bumfuzzle',
  'fartlek',
  'hullaballoo',
  'erf',
  'obelus',
  'sozzled',
  'bumbershoot',
  'cleek',
  'whippersnapper',
  'accubation',
  'flabbergast',
  'foppish',
  'blubber',
  'dollop',
  'flummoxed',
]
let life = 6

//
// const chosenWord = words [Math.random() * words.length]

let randomIdx = Math.floor(Math.random() * words.length)
let selectedWORD = words[randomIdx]
// let lives = 6
let guesses = []
let imageId = 1

let splitWord = selectedWORD.split('')
//
console.log(selectedWORD.split('').map((c) => '_'))

const secretWordEl = document.querySelector('#secret-word')
const BtnEl = document.querySelectorAll('.btn')
const displayEl = document.querySelector('#display')
const resetEl = document.querySelector('#reset')
const hangmanPictureElement = document.querySelector('#picture')
let splitEmptyWord = selectedWORD.split('').map((c) => '_')

console.log(splitEmptyWord)
console.log(splitWord)
function keyboard(event) {
  console.log(event.target.textContent)
  if (selectedWORD.includes(event.target.textContent)) {
    console.log('correct')
    console.log(splitWord.indexOf(event.target.textContent))

    for (let i = 0; i < splitEmptyWord.length; i++) {
      if (event.target.textContent === splitWord[i]) {
        splitEmptyWord[i] = splitWord[i]
      }
    }
    redrawLetters()

    console.log('updated empty word', splitEmptyWord)
  } else {
    event.target.style.backgroundColor = 'grey'

    life = Number(life) - 1
    displayEl.textContent = life

    imageId++
    hangmanPictureElement.src = `./images/image${imageId}.jpg`

    console.log('incorrect')
  }
  checkWinCondition()
  event.target.disabled = true
}

for (allBtn of BtnEl) {
  allBtn.addEventListener('click', keyboard)
}

function redrawLetters() {
  secretWordEl.innerHTML = ''

  for (i = 0; i < splitEmptyWord.length; i++) {
    const spanEl = document.createElement('span')

    spanEl.textContent = splitEmptyWord[i]
    spanEl.classList.add('dashes')

    console.log(spanEl)
    secretWordEl.appendChild(spanEl)
  }
}

for (i = 0; i < selectedWORD.length; i++) {
  const spanEl = document.createElement('span')

  spanEl.textContent = '_'
  spanEl.classList.add('dashes')
  console.log(spanEl)
  secretWordEl.appendChild(spanEl)
}
// let life = document.createElement('p')
displayEl.textContent = life
console.log(life)

function checkWinCondition() {
  if (life === 0) {
    console.log('you lose')
    displayEl.textContent = `you lose! the word was ${selectedWORD}`
  }

  const isWinner = splitEmptyWord.every((letter) => letter !== '_')

  if (isWinner) {
    console.log('You WIN')
    displayEl.textContent = 'you win!'
  }
}

function resetButtons() {
  BtnEl.forEach((btn) => {
    btn.disabled = false
  })
}

function restart(event) {
  console.log('restart')
  randomIdx = Math.floor(Math.random() * words.length)
  selectedWORD = words[randomIdx]
  life = 6
  displayEl.textContent = life
  splitWord = selectedWORD.split('')
  splitEmptyWord = selectedWORD.split('').map((c) => '_')
  imageId = 1
  hangmanPictureElement.src = './images/image1.png'

  for (oneButton of BtnEl) {
    oneButton.style.backgroundColor = '#c2fbd7'
  }
  redrawLetters()
  resetButtons()
}

resetEl.addEventListener('click', restart)
