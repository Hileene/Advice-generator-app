/* Select button dice element */
var apiUrl = 'https://api.adviceslip.com/advice'
var btnAdvice = document.querySelector('#btnAdvice')

/* Add an event listener to the button */
btnAdvice.addEventListener('click', function (e) {
  e.preventDefault()

  /*Fetch advices from the API*/
  fetch(apiUrl)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      return getAdvice(data)
    })
    .catch(function (err) {
      return console.error(err)
    })
})

/* Display advices ID and advice text on the DOM */
function getAdvice(data) {
  var advice = data.slip.advice
  var id = data.slip.id
  var adviceIdElement = document.querySelector('#adviceId')
  var adviceTextElement = document.querySelector('#adviceText')
  if (adviceIdElement && adviceTextElement) {
    adviceIdElement.textContent = ''.concat(id)
    adviceTextElement.textContent = advice
  }
}
