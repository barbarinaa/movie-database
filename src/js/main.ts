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
    return `
    <div class="card" style="width: 18rem;">
      <div>
        <div class="card-body">
          <p class="card-text">${title}, ${year}</p>
        </div>
        <img class="card-img-top" src=${`https://www.maxim.com/.image/t_share/MTM1MTQyODM4NzIzMDgwMTYy/placeholder-title.jpg`}>
      </div>
      <div>
        <a href="#" class="btn btn-primary" id="btn">Add to my List</a>
      </div>
    </div>`;
  } else {
    return  `
    <div class="card" style="width: 18rem;">
      <div>
        <div class="card-body">
          <p class="card-text">${title}, ${year}</p>
        </div>
        <img class="card-img-top" src=${movie}>
      </div>
      <div>
        <a href="#" class="btn btn-primary" id="btn">Add to my List</a>
      </div>
    </div>`;
  }
}

const buildMovieList = (listOfMovies) => {
  let ul = document.getElementById("movieList");
  ul.innerHTML = "";
  listOfMovies.Search.forEach((movie) => {
    const wrapper = document.createElement('div');
    wrapper.setAttribute("id", "btn");
    wrapper.addEventListener('click', () => myFavourites(movie));
    wrapper.innerHTML += createListItem(movie.Title, movie.Year, movie.Poster);
    ul.append(wrapper);
    // ul.innerHTML += createPosterItem(movie)
    // ul.innerHTML += createFavouriteButton()
    // ul.append(createPosterItem(movie)); --> if setting attribute outside of the string
  });
}

const myFavourites = (movie) => {
  const li = document.createElement("div")
  let newList = document.getElementById("favouriteList");
  li.innerHTML += `${movie.Title}, ${movie.Year}`;
  newList.append(li);
}

  // var testObject = { 'one': `${movie.Title}, ${movie.Year}`};
  // localStorage.setItem('testObject', JSON.stringify(testObject));
  // var retrievedObject = localStorage.getItem('testObject');
  // console.log('retrievedObject: ', JSON.parse(retrievedObject));

// }

// const showList = document.getElementById("show")

// showList.addEventListener('click', function (event) {
//   var testObject = { 'one': `${movie.Title}, ${movie.Year}`};
//   localStorage.setItem('testObject', JSON.stringify(testObject));

// }, false);

// // Check for saved wishlist items
// var saved = localStorage.getItem('testObject');

// // If there are any saved items, update our list
// if (saved) {
// 	showList.innerHTML = saved;
// }








// const storeMovies = (movie) => {
//   let moviesArray = []
//   var testObject = { 'one': `${movie.Title}, ${movie.Year}`};
//   moviesArray.push(testObject)
//   localStorage.setItem('testObject', JSON.stringify(moviesArray));
// }

// const display = (one) => {
//   let favList = document.getElementById('favouriteList');
//   let retrievedObject = localStorage.getItem('testObject');
//   favList.innerHTML = retrievedObject;
//   return one;
// }