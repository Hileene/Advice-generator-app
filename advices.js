/* Select button dice element */
const btnAdvice = document.querySelector('.svg-dice')

/* Add an event listener to the button */
btnAdvice.addEventListener('click', (e) => {
  e.preventDefault()
  /*Fetch advices from the API*/
  fetch('https://api.adviceslip.com/advice')
    .then((response) => response.json())
    .then((data) => getAdvice(data))
    .catch((err) => console.error(err))
})

/*Display advices ID and advice text on the DOM*/
function getAdvice(data) {
  const advice = data.slip.advice
  const id = data.slip.id
  document.querySelector('#adviceId').textContent = `${id}`
  document.querySelector('#adviceText').textContent = advice
}
