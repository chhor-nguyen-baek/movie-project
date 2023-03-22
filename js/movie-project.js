(function () {
    "use strict"

    // FUNCTION FOR PAGE LOAD
    window.onload = function () {
        var loadingScreen = document.getElementById('loading-screen');
        var loadingCircle = document.getElementById('loader');
        var htmlContent = document.getElementById('content');
        var loadContainer = document.getElementById('loader-container');

        setTimeout(function () {
            loadContainer.style.display = 'none';
            loadingCircle.style.display = 'none';
            loadingScreen.style.display = 'none';
            htmlContent.style.display = 'block';
        }, 3000)
    }


    // FUNCTION TO PULL EXISTING MOVIES FROM JSON SERVER
    function movieInputForm() {
        const searchInput = document.querySelector('#submit-title');
        const submitButton = document.querySelector('#submit-movie');
        const movieListContainer = document.querySelector('#test-push');

        fetch('https://glitter-furtive-transport.glitch.me/movies')
            .then(response => response.json()) /* review was created successfully */
            .then(function (data) {
                console.log(data);
                let movieList = data.length;
                const url = 'https://glitter-furtive-transport.glitch.me/movies/';
                var addHTML = "";
                for (let i = 0; i < movieList; i++) {
                    addHTML += "<div class='w-25 card col-6 my-3 mx-4 movie-card'>"
                    addHTML += "<h5>Title: " + data[i].title + "</h5><br>"
                    addHTML += "<h5>Director: " + data[i].director + "</h5><br>"
                    addHTML += "<h5>Rating: " + data[i].rating + "</h5><br>"
                    addHTML += "<h5>Genre: " + data[i].genre + "</h5><br>"
                    addHTML += "<h6>ID: " + data[i].id + "</h6><br>"
                    addHTML += "<button class='delete-btn' value=" + data[i].id +">Delete</button>"
                    addHTML += "</div>"
                    addHTML += "<hr>"
                    $('#test-push').html(addHTML);

                }
                $('.delete-btn').click(function (e) {
                    e.preventDefault();
                    let id = $(e.target).val();
                    deleteMovie(id);
                    console.log(id);
                })

            })
            .catch(error => console.error(error)) /* handle errors */
    }


    movieInputForm();


    // FUNCTION TO ADD A MOVIE

    function addMovie(e) {
        e.preventDefault();
        confirm('Are you sure you want add this movie?')

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
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newMovie),
        })

        fetch(url)
            .then(response => response.json())
            .then(() => movieInputForm());
        {
        }
    }

    var addMovieBtn = document.getElementById("new-movie-btn");
    addMovieBtn.addEventListener("click", addMovie);


    //Delete Movie Function
    // var selectedID = document.querySelector(movieInputForm.value);
    function deleteMovie(id) {
        confirm("Are you sure to delete this movie?");

        fetch('https://glitter-furtive-transport.glitch.me/movies/' + id, {
            method: 'DELETE',
        })
            .then(() => fetch('https://glitter-furtive-transport.glitch.me/movies')
                .then(response => response.json())
                .then(() => movieInputForm()));
    }
})();



