/* Select button dice element 

const apiUrl: string = 'https://api.adviceslip.com/advice'
const btnAdvice = document.querySelector<HTMLDivElement>('#btnAdvice')!

/* Add an event listener to the button 
btnAdvice.addEventListener('click', (e: Event) => {
  e.preventDefault()
  /*Fetch advices from the API
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => getAdvice(data))
    .catch((err) => console.error(err))
})

/* Define the structure of the expected data 
interface AdviceSlip {
  slip: {
    id: number
    advice: string
  }
}

/* Display advices ID and advice text on the DOM 
function getAdvice(data: AdviceSlip) {
  const advice: string = data.slip.advice
  const id: number = data.slip.id

  const adviceIdElement = document.querySelector('#adviceId')!
  const adviceTextElement = document.querySelector('#adviceText')!

  adviceIdElement.textContent = `${id}`
  adviceTextElement.textContent = advice
}*/

const apiUrl: string = 'https://api.adviceslip.com/advice'

function fetchAndDisplayAdvice() {
  //Fetch advices from the API
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const advice: string = data.slip.advice
      const id: number = data.slip.id
      const adviceIdElement =
        document.querySelector<HTMLSpanElement>('#adviceId')!
      const adviceTextElement =
        document.querySelector<HTMLSpanElement>('#adviceText')!
      adviceIdElement.textContent = `${id}`
      adviceTextElement.textContent = advice
    })
    .catch((err) => console.error(err))
}
// Call the fetch function on page load
document.addEventListener('DOMContentLoaded', () => {
  fetchAndDisplayAdvice()
})

const btnAdvice = document.querySelector<HTMLButtonElement>('#btnAdvice')
if (btnAdvice) {
  btnAdvice.addEventListener('click', (e: Event) => {
    e.preventDefault()
    fetchAndDisplayAdvice()
  })
}
