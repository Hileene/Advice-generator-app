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

const btnAdvice = document.querySelector<HTMLButtonElement>('#btnAdvice')!

btnAdvice.addEventListener('click', (e: Event) => {
  e.preventDefault()
  fetchAndDisplayAdvice()
})
