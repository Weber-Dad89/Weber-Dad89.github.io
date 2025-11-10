//let data= null;

// API Source: "https://api-ninjas.com/api"
let url = 'https://api.api-ninjas.com/v2/randomquotes?categories=success,wisdom';
let options = {
       method: 'GET',
       headers: { 'X-api-key': 'E1J+4lJXFweTqLagqU6h+Q==pFY5veVVYAMSRHUt' }
}

       

async function quoteDisplayer() {
       try {
              const response= await fetch(url, options);
              //let response= await fetch("https://api.api-ninjas.com/v2/randomquotes?categories=success,wisdom", options);
              let data= await response.json();
              // .then(res => res.json());
              // .then(data => console.log(data));
              if (!response.ok) {
                     throw new Error(`HTTP error! status: ${response.status}`);
              }
              console.log(data);
              console.log("quote: ", data[0].quote);
              console.log("author ", data[0].author);
              let randomQuote= data[0].quote;
              let quoteAuthor= data[0].author;
              document.getElementById("randomQuote").innerText= "Quote: " + randomQuote;
              document.getElementById("quoteAuthor").innerText= "Author: " + quoteAuthor;
       } catch (error) {
              console.error("Error fetching quote: ", error);
       }
}

// window.onload= function() {
//  let promise= new Promise(function(resolve, reject) {
//        //let dataSuccessful= quoteDisplayer();
//        if (dataSuccessful)
//               resolve(data);
//        else
//               reject("Unable to load quote");
//        });
//        promise.then(
//               function(normalValue) {quoteDisplayer(normalValue); },
//               function(errorValue) {quoteDisplayer(errorValue);}
//        ).finally(function() {
//               console.log("Cleaning up...")
//        });
// };

quoteDisplayer();
