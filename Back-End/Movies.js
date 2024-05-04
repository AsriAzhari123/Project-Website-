const express = require('express');
const movies = require('./Movies.json')
const Router = express.Router()
express().use(express.json())

Router.get('/movies', (request, response) => {
    response.status(200).json(movies);
});

Router.route('/movie/:id')
.get((request, response) => {
    const reqId = Number(request.params.id);
    const getid = movies.find(x => x.id === reqId);

    if (getid) {
        response.status(200).json(getid);
    } else {
        response.status(404).json({message: `movie is not found` });
    }
})
.delete((request,response) =>{
    const movieId = Number(request.params.id);
    const deleteId = movies.find(x => x.id === movieId);
    
    if (deleteId){
      movies.map(x => {
        if (x.id === movieId){
          movies.splice(movies.indexOf(deleteId), 1)
        }
      })
      response.status(200).json({message: `movie deleted successfully`});
    }else{
      response.status(404).json({message: `movie is not found` });
    }
})
.put((request, response) => {
    const movieId = Number(request.params.id);
    const body = request.body;
    const Put = movies.find((Put) => Put.id === movieId);
    const index = movies.indexOf(Put);

    if (!Put) {
        response.status(404).json({message: `movie is not found` });
    } else {
        const updateMovies = { ...Put, ...body };

        movies[index] = updateMovies;

        response.status(200).json({id:Put.id});
    }
})

module.exports = Router