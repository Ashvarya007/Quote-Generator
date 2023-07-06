const quoteContainer = document.getElementsByClassName("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const showName = document.getElementById("show");
const loaderBtn = document.getElementById("loader");
const favBtn = document.getElementById("favIcon");
const favList = document.getElementById("favouriteList");
const listHolder = document.getElementById("listContainer");
const alert = document.getElementById("alertBox");
const darkModeBtn = document.getElementById("dark-mode");
// let apiQuotes = [];


// show new quote
function newQuoteGeneration() {
    // pick a random quote
    const movieQuote = movieQuotes[Math.floor(Math.random() * movieQuotes.length)];
    if (!movieQuote.author) {
        authorText.textContent = "Unknown";
    } else {
          authorText.textContent = movieQuote.author;
    }
    // decrease font size for large quote

    if (movieQuote.quote.length > 150) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = movieQuote.quote;
    showName.textContent = movieQuote.show; 
}
// tweet quote

function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// add to favourites
function favourites() {
    alert.classList.remove("d-none");
    favBtn.classList.add("bi-heart-fill");
    const newList = document.createElement('li');
    const removeIcon = document.createElement('i');
    removeIcon.classList.add("bi-heart-fill");
    removeIcon.classList.add("text-danger");
    newList.textContent = `${quoteText.textContent} -${authorText.textContent} from ${showName.textContent}`;
    newList.appendChild(removeIcon);
    var item = newList.value;
    removeIcon.addEventListener('click', function removeQuote() { newList.remove(item); })
    listHolder.appendChild(newList);
    newList.classList.add("list-group-item");
    newList.classList.add("bg-success-subtle");
}

// dark mode for the quotes
function setDarkMode() {
    document.body.classList.toggle("dark-mode-bg");
    document.getElementById("title").classList.toggle("dark-mode-text");
    document.getElementById("titleText").classList.toggle("dark-mode-text");
    document.getElementsByClassName("list-group-item").classList.toggle("bg-dark-subtle");
}

// Event listener
newQuoteBtn.addEventListener('click', newQuoteGeneration);
twitterBtn.addEventListener('click', tweetQuote);
favBtn.addEventListener('click', favourites);
darkModeBtn.addEventListener('click', setDarkMode)



// on page load
newQuoteGeneration();

