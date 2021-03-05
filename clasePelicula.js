const express= require("express");
const bodyParser = require("body-parser");
const app = express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
// Clases
class Professional
{       
    constructor(name, age, genre, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarNumber, profession)
        {
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weight;
        this.height = height;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarNumber = oscarNumber;
        this.profession = profession;
        
        }
}

var actor1 = new Professional("Juan", 45, "Male", 80 , 185, "Brown", "Black", "Black", false, "Nigerian", 0 , "Actor" )
var actor2 = new Professional("Felipe", 36, "Male", 65, 170, "Black", "Green", "Caucasic", false, "Spanish", 0, "Actor" )
var director = new Professional("Sara", 36, "Female", 50, 168, "Blond", "Blue", "Caucasic", false, "French",0 , "Director")
var writer = new Professional("Ana", 28, "Female", 54, 164, "Black", "Brown", "Caucasic", false, "Spanish", 0 , "Writer")
var actor3 = new Professional("Leonardo di Caprio", 48, "Male", 80, 1.82, "Blondy", "Blue", "Aria", false, "Yankee", 12, "Actor");
var actor4 = new Professional("Mark Hammill", 69, "Male", 80, 172, "brown", "blue", "caucasian", false, "US citizen", 0, "Actor");
var profesionales = [actor1,actor2, actor3, actor4, director, writer]

class Movie
{
    constructor(title, releaseYear, nationality, genre, actors, director, writer, language, platform, isMCU, mainCharacterName, producer, distributor)
    {
        this.title = title
        this.releaseYear = releaseYear
        this.nationality = nationality
        this.genre = genre
        this.actors = actors
        this.director = director
        this.writer = writer
        this.language = language
        this.platform = platform
        this.isMCU = isMCU
        this.mainCharacterName = mainCharacterName
        this.producer = producer
        this.distributor = distributor

    }
}
var peli1= new Movie("Rec", 2008,"Spanish", "Terror",[actor1,actor2,actor3],director,writer,"Spanish","Netflix","No", actor4, "Global Media", "A3Media")

// EJ2
var pelicula = null
app.get('/pelicula', 
    function(request,response)
    {
        if (pelicula != null)
            response.send(pelicula);
        else 
        {
            response.send({error:true, codigo:200,mensaje:"La pelicula no existe"});
        }    
    })

app.post('/pelicula', function(request,response)
    {
        if (pelicula == null)
        {
            pelicula = new Movie(request.body.title,
                              request.body.releaseYear,
                              request.body.nationality,
                              request.body.genre)
                            
            respuesta = {error:false, codigo:200,
                        mensaje:'Pelicula creada', resultado: pelicula};                    
        }   
        else{      
            respuesta = {error:true, codigo:200,
                        mensaje: 'Pelicula existente', resultado: null}
        }
        response.send(respuesta);             
    })

app.put('/pelicula', function(request, response)
    {
        if(pelicula != null)
        {
                if(request.body.title != null)
                {
                    pelicula.title = request.body.title;
                } 
                if(request.body.releaseYear != null)
                {    
                    pelicula.releaseYear = request.body.releaseYear;
                }
                if(request.body.nationality != null)
                {    
                    pelicula.nationality= request.body.nationality;
                }
                if(request.body.genre != null)
                {
                    pelicula.genre= request.body.genre;
                }
                respuesta ={error:false, codigo:200,
                            mensaje:'Profesional actualizado', resultado: pelicula}
                
                response.send(respuesta)
       
        }
        else
        {
            respuesta ={error:true, codigo:200,
            mensaje:'No hay profesional', resultado: pelicula
        }
    
        response.send(respuesta)
        }         
    });
app.delete('/pelicula', function(request, response)
    {
        let respuesta;
        if(pelicula != null)
        {
            pelicula = null;
            respuesta = {error:false, codigo:200,
                mensaje:'Pelicula eliminada', resultado: pelicula}
        }
        else
        {
            respuesta = {error:true, codigo:200,
            mensaje:'La pelicula no existe', resultado: pelicula}
        }        
        response.send(respuesta)        
    })
// EJ3
app.listen(3000)