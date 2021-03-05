const express= require("express");
const bodyParser = require("body-parser");
const app = express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
// Clase
class Movie
{

//Constructor
    constructor(title, releaseYear, nacionality, genre)
    {
        this.title = title
        this.releaseYear = releaseYear
        this.nationality = nacionality
        this.genre = genre
    }
}
var peli0 = new Movie("Yo robot", 2010, "United States", "Sci-fy")
var peli1 = new Movie("Deprisa deprisa", 1984, "España", "Action")
var peli2 = new Movie("Volver", 1998, "España","Drama")
var peli3 = new Movie("Iron man", 2006, "United States", "Sci-fy")
var peli4 = new Movie("Death Race", 2003, "United States", "Action")
var peli5 = new Movie("Bambi", 1986, "United States", "Infantil")
var pelis = [peli0, peli1, peli2, peli3, peli4, peli5]
// Apis
app.get('/pelicula', 
    function(request,response)
    {
        id = request.query.id
        if(request.query.id != null)
        {
            response.send(pelis[request.query.id])
        }
        else
        {
            response.send(pelis)
        }        
    })
app.listen(4000)