const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (err, response, body) => {
  const data = JSON.parse(body);

  if (data.length === 0) {
    return console.log("Please input a valid cat breed name.")
  }
  if (err) {
    return callback(err);
  } else {
    return callback(err, data[0]["description"]);
  }
}); 
};


module.exports = { fetchBreedDescription };