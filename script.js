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

  cards.map((card) => {
    const figure$$ = document.createElement("figure"); //Creo nodos de figure donde van a ir los 3 elementos de información
    //Creo los nodos de los tres elementos que quiero en mi figure:
    const titulo$$ = document.createElement("h2");
    const tituloJap$$ = document.createElement("h3");
    const image$$ = document.createElement("img");
    const description$$ = document.createElement("p");

    //Les doy la información con la que quiero que se me completen:
    titulo$$.textContent = card.spanishName; //Le añado el contenido al titulo con el valor de la API
    tituloJap$$.textContent = card.kanji;
    image$$.src = card.sakuraCard;//Le añado el contenido al src de la imagen con el valor de la API
    image$$.alt = card.spanishName; //Le añado el contenido al alt de la imagen con el valor de la API
    description$$.textContent = card.meaning; //Le añado el contenido a la p con el valor de la API

    //Inyecto en el figure los tres elementos
    figure$$.appendChild(titulo$$);
    figure$$.appendChild(tituloJap$$);
    figure$$.appendChild(image$$);
    figure$$.appendChild(description$$)
    //Añado los figure a mi galeria
    gallery$$.appendChild(figure$$)

  });
};

getCards(); //Solo estoy ejecutando a nivel general esta función
