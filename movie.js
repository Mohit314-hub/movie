const movies = [
    {
      title: "Avengers infinity war",
      genre: "Action",
      poster: "il_570xN.1506815473_lb94.avif",
      rating: 4.5,
      synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "John wick",
      genre: "Action",
      poster: "81F5PF9oHhL._AC_UF894,1000_QL80_.jpg",
      rating: 4.8,
      synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    // Add more movies...
  ];
  
  const movieList = document.getElementById("movieList");
  const searchInput = document.getElementById("searchInput");
  
  // Display all movies initially
  displayMovies(movies);
  
  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchTerm));
    displayMovies(filteredMovies);
  });
  
  function displayMovies(movies) {
    movieList.innerHTML = "";
  
    movies.forEach(movie => {
      const movieElem = document.createElement("div");
      movieElem.classList.add("movie");
  
      const imgElem = document.createElement("img");
      imgElem.src = movie.poster;
      imgElem.alt = movie.title;
      movieElem.appendChild(imgElem);
  
      const titleElem = document.createElement("h2");
      titleElem.textContent = movie.title;
      movieElem.appendChild(titleElem);
  
      const genreElem = document.createElement("p");
      genreElem.textContent = `Genre: ${movie.genre}`;
      movieElem.appendChild(genreElem);
  
      const ratingElem = document.createElement("p");
      ratingElem.textContent = `Rating: ${movie.rating}`;
      movieElem.appendChild(ratingElem);
  
      const synopsisElem = document.createElement("p");
      synopsisElem.textContent = movie.synopsis;
      movieElem.appendChild(synopsisElem);
  
      movieList.appendChild(movieElem);
    });
  }