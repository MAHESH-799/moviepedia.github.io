let api = "https://www.omdbapi.com/?&apikey=adde47b9&t=";

let title = document.getElementById('title');
let director = document.getElementById('director');
let actors = document.getElementById('actors');
let writer = document.getElementById('writer');
let plot = document.getElementById('plot');
let genre = document.getElementById('genre');
let awards = document.getElementById('awards');
let collection = document.getElementById('collection');
let poster = document.getElementById('poster');
let type = document.getElementById('type');
let Released = document.getElementById('released');
let Rating = document.getElementById('rating');
let containerElement = document.querySelector('.contanier');

// Function to handle keypress event
function handleKeyPress(event) {
    // Check if the Enter key is pressed (key code 13)
    if (event.key === 'Enter') {
        searchMovie(); // Call the searchMovie function
    }
}

function searchMovie() {
    let movieName = document.getElementById('movieTitle').value;
    let query = api + movieName;

    fetch(query)
        .then((data) => {
            console.log(data);
            return data.json();
        })
        .then((data) => {
            // Update the content using the received data
            updateContent(data);

            // Show the container with movie details
            showMovieDetails();
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
}

// Function to update the content based on the received data
function updateContent(data) {
    title.innerText = data.Title;
    director.innerText = data.Director;
    actors.innerText = data.Actors;
    writer.innerText = data.Writer;
    plot.innerText = data.Plot;
    genre.innerText = data.Genre;
    awards.innerText = data.Awards;
    collection.innerText = data.BoxOffice;
    poster.src = data.Poster;
    type.innerText = data.Type;
    Released.innerText = data.Released;
    Rating.innerText = data.imdbRating;
}

// Function to show the movie details container
function showMovieDetails() {
    containerElement.style.display = 'block';
}

// Function to hide the movie details container
function hideMovieDetails() {
    containerElement.style.display = 'none';
}

// Optionally, you can hide the container when the page loads
hideMovieDetails();
