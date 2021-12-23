const quotesEl = document.querySelector('#quotes');
const url = "https://type.fit/api/quotes"

fetch(url)
  .then(response => response.json())
  .then((data) => {
    const randomNum = Math.floor(Math.random() * (data.length - 1) + 1);
    const wholeQuotes = data[randomNum]
    const quoteLine = wholeQuotes.text;
    const author = wholeQuotes.author
    quotesEl.innerText = `${quoteLine} \n\n ${author}`
  });
