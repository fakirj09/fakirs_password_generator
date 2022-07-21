const characters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '~',
  '`',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '_',
  '-',
  '+',
  '=',
  '{',
  '[',
  '}',
  ']',
  ',',
  '|',
  ':',
  ';',
  '<',
  '>',
  '.',
  '?',
  '/',
]
const myButton = document.querySelector('button')
let pwd1El = document.getElementById('password1-el')
let pwd2El = document.getElementById('password2-el')
let pwdlength = 14
function randomNumber() {
  let random = Math.floor(Math.random() * characters.length)
  return characters[random]
}
function pwdGenerator() {
  let password = ''
  for (let i = 0; i < pwdlength; i++) {
    password += randomNumber()
  }
  return password
}

const renderPwd = () => {
  let pwd1 = pwdGenerator()
  let pwd2 = pwdGenerator()
  pwd1El.textContent = pwd1
  pwd2El.textContent = pwd2
}
myButton.addEventListener('click', renderPwd)
