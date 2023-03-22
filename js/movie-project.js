(function () {
    "use strict"

    // FUNCTION FOR PAGE LOAD

    function pageLoad() {
        if (searchMovies) {
            return alert('Page is loading, please be patient.....');
        }
    }
    window.addEventListener('load', pageLoad);
    searchMovies();

    // FUNCTION TO PULL EXISTING MOVIES FROM JSON SERVER

    function searchMovies() {
        const searchInput = document.querySelector('#submit-title');
        const submitButton = document.querySelector('#submit-movie');
        const movieListContainer = document.querySelector('#test-push');

        fetch('https://glitter-furtive-transport.glitch.me/movies')
            .then(response => response.json()) /* review was created successfully */
            .then(function (data) {
                console.log(data);
                let movieList = data.length;
                var addHTML = "";
                for (let i = 0; i < movieList; i++) {
                    addHTML += "<div class='w-25 card col-6 my-3 mx-5'>"
                    addHTML += "<h5>Title: " + data[i].title + "</h5><br>"
                    addHTML += "<h5>Director: " + data[i].director + "</h5><br>"
                    addHTML += "<h5>Rating: " + data[i].rating + "</h5><br>"
                    addHTML += "<h5>Genre: " + data[i].genre + "</h5><br>"
                    addHTML += "</div>"
                    addHTML += "<hr>"
                    $('#test-push').html(addHTML);

                }
                window.removeEventListener('load', pageLoad);

            })
            .catch(error => console.error(error)) /* handle errors */
    }

    // FUNCTION TO ADD A MOVIE

    function addMovie() {

        var newTitle = document.querySelector('#title')
        var newDirector = document.querySelector('#director')
        var newRating = document.querySelector('#rating')
        var newGenre = document.querySelector('#genre')
        const newMovie = {
            title: newTitle.value,
            director: newDirector.value,
            rating: newRating.value,
            genre: newGenre.value
        };
        const url = 'https://glitter-furtive-transport.glitch.me/movies';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newMovie),
        };
        fetch(url, options)
            .then(response => response.json())
            .then(function (newMovie) {
                let movieList = newMovie.length;
                var addHTML = "";
                for (let i = 0; i < movieList; i++) {

                    addHTML += "<div class='w-25 card col-6 my-3 mx-5'>"
                    addHTML += "<h5>Title: " + newMovie[i].title + "</h5><br>"
                    addHTML += "<h5>Director: " + newMovie[i].director + "</h5><br>"
                    addHTML += "<h5>Rating: " + newMovie[i].rating + "</h5><br>"
                    addHTML += "<h5>Genre: " + newMovie[i].genre + "</h5><br>"
                    addHTML += "</div>"
                    addHTML += "<hr>"
                    $('#test-push').append(addHTML);
                }
            })
        console.log(addMovie);

    }
    var addMovieBtn = document.getElementById("new-movie-btn");
    addMovieBtn.addEventListener("click", addMovie);

    // FUNCTION TO DELETE MOVIE

    function deleteMovie(id) {
        fetch('https://glitter-furtive-transport.glitch.me/movies' + id, {
            method: "DELETE"
        })
            .then(() => fetch('https://glitter-furtive-transport.glitch.me/movies')
                .then(response => response.json())
                .then(() => searchMovies()))
    }
    deleteMovie()
})();



