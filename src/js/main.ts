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

const createListItem = (title: string, year: string, movie: any) => {
  if (movie == "N/A") {
    return `<li>The title is ${title} and the year is ${year}<br><img src=${`https://www.maxim.com/.image/t_share/MTM1MTQyODM4NzIzMDgwMTYy/placeholder-title.jpg`}></li>`;
  } else {
    return  `<li class="favourite">The title is ${title} and the year is ${year}<br><img src=${movie}></li>`;
  }
}

const buildMovieList = (listOfMovies) => {
  let ul = document.getElementById("movieList");
  ul.innerHTML = "";
  listOfMovies.Search.forEach((movie) => {
    const wrapper = document.createElement('ul');
    wrapper.addEventListener('click', () => myFavourites(movie));
    wrapper.innerHTML += createListItem(movie.Title, movie.Year, movie.Poster);
    ul.append(wrapper);
    // ul.innerHTML += createPosterItem(movie)
    // ul.innerHTML += createFavouriteButton()
    // ul.append(createPosterItem(movie)); --> if setting attribute outside of the string
  });
}

const myFavourites = (movie) => {
  console.log(movie);
  const li = document.createElement("ul")
  let newList = document.getElementById("favouriteList");
  li.innerHTML += `Title: "${movie.Title}", released: ${movie.Year}`;
  newList.append(li);
  // newList.innerHTML += movie.Year
}

// let itemsArray = []

// localStorage.setItem('items', JSON.stringify(itemsArray))
// const data = JSON.parse(localStorage.getItem('items'))
