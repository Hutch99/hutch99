// Information to reach API
const apiKey = 'e8ba07672363411cafd48e498d6549e1';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const existingLinks = document.querySelector('#existingLinks');
const domain = 'go.hutchresources.com';
const domainId = 'f4d33f5910fd47158941f97bfed3fc16';
const domainApi = '/domains/f4d33f5910fd47158941f97bfed3fc16';

const getDomainInfo = () => { 
    fetch('https://api.rebrandly.com/v1/links',{
        method: 'GET',
        domain:  {id: domainId},
        headers: {
          'Content-type': 'application/json',
          'apikey': apiKey
        }
    })
    .then(response => {
        if(response.ok){
            let returnedContent = response.json();
            console.log(returnedContent);
          return returnedContent;
        }
        throw new Error('Request failed!');
      },(networkError) =>{
        console.log(networkError.message);
      })
      .then(jsonResponse => {
        renderListResponse(jsonResponse);
      })
};

// OLD
// const shortenUrl = () => {
//     const urlToShorten = inputField.value;
//     const data = JSON.stringify({destination: urlToShorten, domain: {id: domainId, ref: domainApi}});
//     console.log(data);
//       fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/json',
//         'apikey': apiKey
//       },
//       body: data
//     }).then(response =>{
//       if(response.ok){
//         return response.json();
//       }
//       throw new Error('Request failed!');
//     }, networkError => {
//       console.log(networkError.message);
//     }).then(jsonResponse => {
//       renderResponse(jsonResponse);
//     })
//   }

  const shortenUrl = async () => {
    const urlToShorten = inputField.value;
    const data = JSON.stringify({destination: urlToShorten});
    try {
      const response = await fetch(url,{
          method: 'POST',
          body: data,
          headers: {
            'Content-type': 'application/json',
            'apikey': apiKey
                    }
        }
    ); 
      if(response.ok){
        const jsonResponse = await response.json();
        renderResponse(jsonResponse);
      }
    } catch (error) {
      console.log(error);
    }
  }


// Clear page and call Asynchronous functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);
getDomainInfo();