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
    })