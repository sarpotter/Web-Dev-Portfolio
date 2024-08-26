const input = document.getElementById("search-box");
const holder = document.getElementById("quote-holder");
const firstQuote = document.getElementById("quote");
const firstAuthor = document.getElementById("quote-author");
const error = document.getElementById("error");
const main = document.getElementById("main");
const pinnedQuote = document.getElementById("pinned-quotes")
const searchQuote = document.getElementById("searched-quotes")
const header = document.getElementById("title");

async function getQuote() {
    const result = await fetch("https://usu-quotes-mimic.vercel.app/api/random");
    const data = await result.json();
    document.getElementById("quote").innerText = data.content;
    document.getElementById("quote-author").innerText = `-${data.author}`;
}

async function search() {
    const result = await fetch(`https://usu-quotes-mimic.vercel.app/api/search?query=${input.value}`);
    const data = await result.json();

    // Remove items on screen
    firstAuthor.innerText = "";
    firstQuote.innerText = "";
    input.value = "";
    error.innerText = "";

    deleteItems();
    createItems(data);
    
    header.classList.remove("title");
    header.classList.add("small-title");
}

getQuote();

function deleteItems() {
    const list = document.getElementsByClassName("search-quote");
    while(list[0]) {
        searchQuote.removeChild(list[0]);
    }
}

function createItems(data) {
    for(let i=0; i<data.results.length; i++) {        
        // Create quote part of search result
        const quote = document.createElement("div");
        quote.classList.add("search-quote");
        searchQuote.appendChild(quote);
        quote.innerText = data.results[i].content;
        quote.tabIndex = 0;
        quote.setAttribute("data-pin", "false");

        // Quote Event Listeners
        quote.addEventListener("click", () => {
            if(quote.dataset.pin === "false") {
                quote.classList.remove("search-quote");
                quote.classList.add("pinned");
                searchQuote.removeChild(quote);
                pinnedQuote.appendChild(quote);
                quote.dataset.pin = true;
            } else {
                quote.classList.remove("pinned");
                quote.classList.add("search-quote");
                pinnedQuote.removeChild(quote);
                searchQuote.appendChild(quote);
                quote.dataset.pin = false;
            }
            
        });

        quote.addEventListener("keydown", (e) => {
            if(e.code === "Enter") {
                if(quote.dataset.pin === "false") {
                    quote.classList.remove("search-quote");
                    quote.classList.add("pinned");
                    searchQuote.removeChild(quote);
                    pinnedQuote.appendChild(quote);
                    quote.dataset.pin = true;
                } else {
                    quote.classList.remove("pinned");
                    quote.classList.add("search-quote");
                    pinnedQuote.removeChild(quote);
                    searchQuote.appendChild(quote);
                    quote.dataset.pin = false;
                }
            }
            
        });

        const author = document.createElement("div");
        author.classList.add("search-author");
        quote.appendChild(author);
        author.innerText = `-${data.results[i].author}`;
    }
}

document.body.addEventListener("click", getQuote);

input.addEventListener("keydown", (e) => {
    e.preventDefault;
    if(e.code === "Enter") {
        if(input.value == "") {
            error.innerText = `Error retrieving search. Please try again.`
        } else {
            main.classList.remove("not-searched");
            main.classList.add("searched");

            search();
        }
    }
});

input.addEventListener("blur", () => {
    if(main.classList.contains("not-searched")) {
        document.body.addEventListener("click", getQuote);
    }
    

})

input.addEventListener("focus", () => {
    document.body.removeEventListener("click", getQuote);
})