const URL = " https://striveschool-api.herokuapp.com/books";
const aBook = {
    "asin": "1940026091",
    "title": "Pandemic (The Extinction Files, Book 1)",
    "img": "https://images-na.ssl-images-amazon.com/images/I/91xrEMcvmQL.jpg",
    "price": 7.81,
    "category": "scifi"
};

const discardBtns = Array.from(document.getElementsByClassName("btn-primary"))

discardBtns.forEach(btn => {
  btn.onclick = ev => {
    const cardCol = ev.target.parentElement.parentElement.parentElement;
    cardCol.remove();;
  };
});

const bookCards = discardBtns.map(btn => btn.parentElement.parentElement);

const populateBookCard = (card, book) => {
    const [cardImg, cardBody] = card.children;
    cardImg.src = book.img;
    cardBody.children[0].innerText = book.title;
    cardBody.children[1].innerText = `${book.price}€`;
}

window.onload = () => {
  fetch(URL)
    .then(resp => resp.json())
    .then(books => {
        console.log(books[0]);
        const booksAndCards = bookCards.map((bookCard, index) => {
            return [bookCard, books[index]]
        });

        booksAndCards.forEach(bookAndCard => {
            const [card, book] = bookAndCard;
            populateBookCard(card, book);
        })

        
    });
};
