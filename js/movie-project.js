
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

fetch('https://glitter-furtive-transport.glitch.me/movies')
    .then( response => response.json() ) /* review was created successfully */
    .catch( error => console.error(error) ) /* handle errors */
    .then(function (data){
        console.log(data);
        console.log(data[0].title)

        var addHTML = "";
        for(let i = 0; i < 6; i++){
            addHTML += "<div class=''>"
            addHTML +=  "<h5>Title: " + data[i].title + "</h5><br>"
            addHTML +=  "<h5>Director: " + data[i].director + "</h5><br>"
            addHTML +=  "<h5>Rating: " + data[i].rating + "</h5><br>"
            addHTML +=  "<h5>Genre: " + data[i].genre + "</h5><br>"
            addHTML +=  "</div>"
            addHTML += "<hr>"
        }

        document.getElementById('test-push').innerHTML=addHTML;






    })//end of bracket

})();