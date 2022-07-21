// Information to reach API
const url = 'https://api.datamuse.com/words?sl=';

// Selects page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');
const consoleLog = false;

// AJAX function
const getSuggestions = () => {
    consoleLog ? console.log('running get suggestion') : false;  //debug
  const wordQuery = inputField.value;
    consoleLog ? console.log(wordQuery) : false ; //debug
  const endpoint = url + wordQuery;
    consoleLog ? console.log(endpoint) : false ; //debug
  fetch(endpoint,{cache: 'no-cache'})
  .then(response => {
    consoleLog ? console.log(response.ok) : false ; //debug
    if(response.ok){
        let returnedContent = response.json();
        consoleLog ? console.log(returnedContent) : false ; //debug
      return returnedContent;
    }
    throw new Error('Request failed!');
  },(networkError) =>{
    console.log(networkError.message);
  })
  .then(jsonResponse => {
    renderResponse(jsonResponse);
  })
}

// Clears previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
};

submit.addEventListener('click', displaySuggestions);