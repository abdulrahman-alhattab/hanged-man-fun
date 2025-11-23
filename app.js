const words = ['food', 'array', 'tech', 'home', 'key', 'motherboard']

//
// const chosenWord = words [Math.random() * words.length]

let randomIdx = Math.floor(Math.random() * words.length)
let selectedWORD = words[randomIdx]
let lives = 6
let guesses = []
let msg = ''
//
console.log(selectedWORD.split('').map((c) => '_'))

const secretWordEl = document.querySelector('#secret-word')
const BtnEl = document.querySelectorAll('#BTN')

for (allBtn of BtnEl) {
  const allBtn = addEventListener('click', keyboard)

  function keyboard(event) {
    console.log(event.target.textContent)
     event.textContent = allBtn
       BtnEl.appendChild(allBtn)
  }




}

for (i = 0; i < selectedWORD.length; i++) {
  const spanEl = document.createElement('span')

  spanEl.textContent = '_ '
  console.log(spanEl)
  secretWordEl.appendChild(spanEl)
}
