(function () {
    "use strict"
// const reviewObj = {
//     restaurant_id: 1,
//     name: 'Codey',
//     rating: 5,
//     comments: "This is a really good place for coding and eating"
// };
// const url = 'https://glitter-furtive-transport.glitch.me/';
// const options = {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(reviewObj),
// };
//     function searchMovies() {
//         const searchInput = document.querySelector('#submit-title');
//         const submitButton = document.querySelector('#submit-movie');
//         const movieListContainer = document.querySelector('#test-push');

            fetch('https://glitter-furtive-transport.glitch.me/movies')
                .then(response => response.json()) /* review was created successfully */
                .then(function (data) {
                    console.log(data);
                    let movieList = data;
                    var addHTML = "";
                    for (let i = 0; i < 6; i++) {
                        addHTML += "<div class='w-25 card col-6 my-3 mx-5'>"
                        addHTML += "<h5>Title: " + data[i].title + "</h5><br>"
                        addHTML += "<h5>Director: " + data[i].director + "</h5><br>"
                        addHTML += "<h5>Rating: " + data[i].rating + "</h5><br>"
                        addHTML += "<h5>Genre: " + data[i].genre + "</h5><br>"
                        addHTML += "</div>"
                        addHTML += "<hr>"
                    }
                        document.getElementById('test-push').innerHTML= addHTML;

                    let searchMovie = document.getElementById('submit-title');
                    console.log(searchMovie);


                })
                .catch(error => console.error(error)) /* handle errors */
    // }

})();



