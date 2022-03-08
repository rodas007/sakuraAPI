const sakuraURL = "https://protected-taiga-89091.herokuapp.com/api/card"; 

const gallery$$ = document.querySelector(".gallery"); 
const getCards = async () => {
  const rawCards = await fetch(sakuraURL);
  const formattedCards = await rawCards.json();
  const sakuraCards = formattedCards.data; 
  console.log("SAKURA CARDS", sakuraCards);

  printCards(sakuraCards); 
};

const printCards = (cards) => {

  cards.map((card) => {
    const figure$$ = document.createElement("figure"); 
    const titulo$$ = document.createElement("h2");
    const image$$ = document.createElement("img");
    const description$$ = document.createElement("p");

    titulo$$.textContent = card.spanishName; 
    image$$.src = card.sakuraCard;
    image$$.alt = card.spanishName; 
    description$$.textContent = card.meaning; 

    figure$$.appendChild(titulo$$);
    figure$$.appendChild(image$$);
    figure$$.appendChild(description$$)
    
    gallery$$.appendChild(figure$$)

  });
};

getCards(); 