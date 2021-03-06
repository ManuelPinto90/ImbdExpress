const express= require("express");

const app = express()
app.use(express.urlencoded({extended:false}))
app.use(express.json());
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
var actor3 = new Professional("Leonardo di Caprio", 48, "Male", 80, 1.82, "Blondy", "Blue", "Aria", false, "Yankee", 12, "Actor");
var actor4 = new Professional("Mark Hammill", 69, "Male", 80, 172, "brown", "blue", "caucasian", false, "US citizen", 0, "Actor");
var director = new Professional("Sara", 36, "Female", 50, 168, "Blond", "Blue", "Caucasic", false, "French",0 , "Director")
var writer = new Professional("Ana", 28, "Female", 54, 164, "Black", "Brown", "Caucasic", false, "Spanish", 0 , "Writer")

var profesionales = [actor1,actor2, actor3, actor4, director, writer]
var actors =[actor1,actor2,actor3,actor4]
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
var peli1= new Movie("Rec", 2008,"Spanish", "Terror",[actor1,actor2,actor3],director,writer,
                    "Spanish","Netflix","No", actor4, "Global Media", "A3Media")

// EJ2
var pelicula = null
app.get('/pelicula', 
    function(request,response)
    {
        let respuesta
        if (peli1 != null)
            response.send(peli1);
        else 
        {
            response.send({error:true, codigo:200,mensaje:"La pelicula no existe"});
        }    
    })

app.post('/pelicula', function(request,response)
    {
        peli1 = null;
        let respuesta;
        if (peli1 == null)
        {
            var title = request.body.title;
            var releaseYear = request.body.releaseYear;
            var nationality = request.body.nationality;
            var genre = request.body.genre;
            var actors = request.body.actors;
            var director = request.body.director;
            var writer = request.body.writer;
            var language = request.body.language;
            var platform = request.body.platform;
            var isMCU = request.body.isMCU;
            var mainCharacterName = request.body.mainCharacterName;
            var producer = request.body.producer;ç
            var distributor = request.body.distributor;
            var peli1= new Movie(title, releaseYear, nationality, genre, actors, director, writer, language, platform, isMCU, mainCharacterName, producer, distributor)

            response.send(peli1)                
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
        let respuesta;
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
                if(request.body.actors != null)
                {
                    peli1.actors = request.body.actors;
                }
                if(request.body.director != null)
                {
                    peli1.director = request.body.director;
                }
                if(request.body.writer != null)
                {
                    peli1.writer = request.body.writer;
                }
                if(request.body.language != null)
                {
                    peli1.language = request.body.language;
                }
                if(request.body.platform != null)
                {
                    peli1.platform = request.body.platform;
                }
                if(request.body.isMCU != null)
                {
                    peli1.isMCU = request.body.isMCU;
                }
                if(request.body.mainCharacterName != null)
                {
                    peli1.mainCharacterName = request.body.mainCharacterName;
                }
                if(request.body.producer != null)
                {
                    peli1.producer = request.body.producer;
                }
                if(request.body.distributor != null)
                {
                    peli1.distributor = request.body.distributor;
                }                
                response.send({error:false, codigo:200,
                    mensaje:'Pelicula actualizada', resultado: pelicula})
       
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
        if(peli1 != null)
        {
            peli1 = null;
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
app.listen(3000)