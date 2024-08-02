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
var apiUrl = 'https://api.adviceslip.com/advice';
function fetchAndDisplayAdvice() {
    //Fetch advices from the API
    fetch(apiUrl)
        .then(function (response) { return response.json(); })
        .then(function (data) {
        var advice = data.slip.advice;
        var id = data.slip.id;
        var adviceIdElement = document.querySelector('#adviceId');
        var adviceTextElement = document.querySelector('#adviceText');
        adviceIdElement.textContent = "".concat(id);
        adviceTextElement.textContent = advice;
    })
        .catch(function (err) { return console.error(err); });
}
// Call the fetch function on page load
document.addEventListener('DOMContentLoaded', function () {
    fetchAndDisplayAdvice();
});
var btnAdvice = document.querySelector('#btnAdvice');
btnAdvice.addEventListener('click', function (e) {
    e.preventDefault();
    fetchAndDisplayAdvice();
});
