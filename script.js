// HTML Elements
const cardContainer = document.querySelector(".card-container")


// TODO : Récupérer / fetch une liste de livres 
const apiUrl = "https://openlibrary.org/search.json?q=the+lord+of+the+rings";
var books = [];
async function getBooks() {
    const request = await fetch(apiUrl);
    const data = await request.json();
    books = data.docs;
    console.log("Données reçues", data);

    showBooks();
}

getBooks();
// TODO : Afficher la liste de livres
function showBooks() {
books.forEach(b=> {
    cardContainer.innerHTML= "";
    const card = `
    <div class="card">
               <img
                 src="${b.cover_i}"
                 alt="image du livre"
               />
               <h3>${b.title}</h3>
              
             </div>
    
    
   
   `;

   cardContainer.innerHTML += card;
})

}

/*
{
    "author_key": [
        "OL26320A"
    ],
    "author_name": [
        "J.R.R. Tolkien"
    ],
    "cover_edition_key": "OL51694024M",
    "cover_i": 14625765,
    "edition_count": 250,
    "first_publish_year": 1954,
    "has_fulltext": true,
   
    "title": "The Lord of the Rings"
}

*/

// TODO : Filtrer par date, avec l'input searchInput

// TODO : Trier par date, Date +, Date -
