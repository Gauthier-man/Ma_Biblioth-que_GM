// HTML Elements
const cardContainer = document.querySelector(".card-container");
const searchInput = document.querySelector("#searchInput");
const btnDateHigh = document.querySelector("#btnDateHigh");
const btnDateLow = document.querySelector("#btnDateLow");
// const iconSearch = document.querySelector(".fa-magnifying-glass")
const rangeValue = document.querySelector("#rangeValue");
const booksRange = document.querySelector("#booksRange")

let sorType = "";

// TODO : Récupérer / fetch une liste de livres 
const apiUrl = "https://openlibrary.org/search.json?q=the+lord+of+the+rings?20";
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
    cardContainer.innerHTML= "";
    let list = [...books];
    //Filtrer 
    const search = searchInput.value;
    // const search2 = searchInput.value.toLowerCase();
    if(search !=""){
        
        list = list.filter(b=> b.first_publish_year==search);
        // list = list.filter(b=> b.title.toLowerCase().includes(search));
    }

    // Trier
    if(sorType =="DateHigh") list.sort((a,b)=>b.first_publish_year - a.first_publish_year);
    if(sorType =="DateLow") list.sort((a, b) => a.first_publish_year - b.first_publish_year);

    //Range

   
list.forEach(b=> {
    const card = `
    <div class="card">
               <img
                 src="https://covers.openlibrary.org/b/id/${b.cover_i}-L.jpg"
                 alt="image du livre"
               />
               <h3>${b.title}</h3>
               <h4>${b.author_name}</h4>
               <p>${b.first_publish_year}</p>
              
             </div>
    
    `;

   cardContainer.innerHTML += card;

})


searchInput.addEventListener("input", showBooks);

// iconSearch.addEventListener("click", () => {
//     //Filtrer 
//     const iconSearchInput = iconSearch.value;
//     if(iconSearchInput  !=""){
//         list = list.filter(b=> b.first_publish_year==search);
//     }
// })

btnDateHigh.addEventListener("click", ()=> {
    sorType = "DateHigh"
    showBooks();

})

btnDateLow.addEventListener("click", ()=> {
    sorType = "DateLow"
    showBooks();
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
