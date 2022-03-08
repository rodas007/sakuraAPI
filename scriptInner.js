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
//En vez de crear nodos puedo generar un bloque de HTML...
  const mappedCards = cards.map((card) => `
  <h2>${card.spanishName}</h2>        

  `).join("");

  gallery$$.innerHTML = mappedCards //Y aqui se lo inyecto a la galeria
};



getCards(); //Solo estoy ejecutando a nivel general esta función
