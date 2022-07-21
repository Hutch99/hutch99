// Manipulates responseField to render a formatted and appropriate message
const renderListResponse = (res) => {
// Handles if res is falsey
if(!res){
    console.log(res.status);
  }
  // In case res comes back as a blank array
  if(!res.length){
    existingLinks.innerHTML = "<p>There are no saved links!</p>";
    return;
  }

  // Creates an empty array to contain the HTML strings
  let wordList = [];

  for(let i = 0; i <= res.length -1; i++){
    let destination = res[i].destination;
    let shortUrl = res[i].shortUrl;
    wordList.push(`<li><a href="${destination}">${destination}</a> ==> <a href="http://${shortUrl}">${shortUrl}</a></li> <br>`);
  }
  // Joins the array of HTML strings into one string
  wordList = wordList.join("");

  // Manipulates responseField to render the modified response
  existingLinks.innerHTML = `<p>Here are the existing links: </p><ol>${wordList}</ol>`;
  return
  }
  
  // Manipulates responseField to render an unformatted response
  const renderRawResponse = (res) => {
    // Displays either message depending on results
    if(res.errors){  
      responseField.innerHTML = "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>";
    } else {
      // Adds line breaks for JSON
      let structuredRes = JSON.stringify(res).replace(/,/g, ", \n");
      structuredRes = `<pre>${structuredRes}</pre>`;
      responseField.innerHTML = `${structuredRes}`;
    }
  }
  
  // Renders the JSON that was returned when the Promise from fetch resolves.
  const renderJsonResponse = (response) => {
    // Creates an empty object to store the JSON in key-value pairs
    let rawJson = {}
    for(let key in response){
      rawJson[key] = response[key]
    }
    // Converts JSON into a string and adding line breaks to make it easier to read
    rawJson = JSON.stringify(rawJson).replace(/,/g, ", \n")
    // Manipulates responseField to show the returned JSON.
    responseField.innerHTML = `<pre>${rawJson}</pre>`
  }
  