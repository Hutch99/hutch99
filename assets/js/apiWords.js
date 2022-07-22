// Information to reach API
const url = 'https://api.datamuse.com/words?sl=';

// Selects page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');


// // OLD FUNCTION
// const getSuggestions = () => {
//   const wordQuery = inputField.value;
//   const endpoint = url + wordQuery;
//   fetch(endpoint,{cache: 'no-cache'})
//   .then(response => {
//     if(response.ok){
//         let returnedContent = response.json();
//       return returnedContent;
//     }
//     throw new Error('Request failed!');
//   },(networkError) =>{
//     console.log(networkError.message);
//   })
//   .then(jsonResponse => {
//     renderResponse(jsonResponse);
//   })
// }

const getSuggestions = () => {
  const wordQuery = inputField.value;
  const endpoint = url + wordQuery;
  try{
    const response = await fetch(endpoint,{cache: 'no-cache'}); 
    if(response.ok){
      const returnedContent = await response.json();
      renderResponse(returnedContent);
  }
  }catch(error){
    console.log(error);
  }
    throw new Error('Request failed!');
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