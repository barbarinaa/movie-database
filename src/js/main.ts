const mySearch = (event) => {
   event.preventDefault();
   const movieSearch = document.getElementById("search") as HTMLInputElement;
   const yearSearch = document.getElementById("year") as HTMLInputElement;
   const url = `http://www.omdbapi.com/?apikey=2af14bab&s=${movieSearch.value}&y=${yearSearch.value}`;
   fetch(url)
   .then((response) => response.json())
   .then((listOfMovies) => buildMovieList(listOfMovies))
   .catch((error) => {
       throw new Error(error);
   });
}

document.getElementById("submit").addEventListener("click", mySearch);

const createListItem = (title: string, year: string) => {
  return `<li>The title is ${title} and the year is ${year}</li>`;
}

const createPosterItem = (movie: any) => {
  // let posterImage = document.createElement("IMG");
  // posterImage.setAttribute("src", `${movie.Poster}`);
  // return posterImage;  ---> this is one way of doing it
  if (movie.Poster == "N/A") {
    return `<img src=${`https://www.maxim.com/.image/t_share/MTM1MTQyODM4NzIzMDgwMTYy/placeholder-title.jpg`}>`;
  } else {
    return `<img src=${movie.Poster}>`;
  }
}

const createFavouriteButton = () => {
  return "<input type='submit' value='favourite' name='button'>";
}

const buildMovieList = (listOfMovies) => {
  let ul = document.getElementById("movieList");
  ul.innerHTML = "";
  listOfMovies.Search.forEach((movie) => {
      ul.innerHTML += createListItem(movie.Title, movie.Year);
      ul.innerHTML += createPosterItem(movie)
      ul.innerHTML += createFavouriteButton()
      // ul.append(createPosterItem(movie)); --> if setting attribute outside of the string
  })
}

const favouritesList = () => {

}
// document.getElementsByName("button")[0].addEventListener('click', function(event) {
//  var = event.target.classList.add("fav") as HTMLButtonElement;

// })

// let itemsArray = []

// localStorage.setItem('items', JSON.stringify(itemsArray))
// const data = JSON.parse(localStorage.getItem('items'))

// to create favourites list//

// mark item as favourite (onclick)
// retrieve the data from the marked item
// add data to the ListofFavourites
// keep adding data to the list when user clicks

// console.log(localStorage)
// localStorage.setItem('movie', `${movie.Title}`)

