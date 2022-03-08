const sakuraURL = "https://protected-taiga-89091.herokuapp.com/api/card"; //Almaceno la URL de la API

const gallery$$ = document.querySelector(".gallery"); //Creo el nodo con mi div con clase "gallery"

//Declaro la función que me recuperará las cartas
const getCards = async () => {
  const rawCards = await fetch(sakuraURL); //De manera asíncrona recupero la información cruda
  const formattedCards = await rawCards.json(); //Transformo la información cruda a JSON
  const sakuraCards = formattedCards.data; //Y me quedo con el .data que es donde están las cartas
  console.log("SAKURA CARDS", sakuraCards);

  printCards(sakuraCards); //Ejecuto la función printCards declarada abajo y le paso por parámetro mis sakuraCards
};

//Declaro la función que me pintará las cartas en el HTML
const printCards = (cards) => {
  gallery$$.innerHTML = "";

  cards.map((card) => {
    const figure$$ = document.createElement("figure"); //Creo nodos de figure donde van a ir los 3 elementos de información
    //Creo los nodos de los tres elementos que quiero en mi figure:
    const titulo$$ = document.createElement("h2");
    const image$$ = document.createElement("img");
    const description$$ = document.createElement("p");

    //Les doy la información con la que quiero que se me completen:
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

getCards(); //Solo estoy ejecutando a nivel general esta función
