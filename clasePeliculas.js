const express= require("express");

const app = express()
app.use(express.urlencoded({extended:false}))
app.use(express.json());
// Clases
class Professional
{       
    constructor(name, age, genre, weight, height, hairColor, eyeColor, race, 
                isRetired,nationality, oscarNumber, profession)
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

app.get('/pelicula/actor', 
        function (request, response) 
        {
            let id=request.query.id
            if(id != null)
                {
                    if(request.query.id != null)
                        {
                            response.send(peli1.actors[request.query.id])
                        }               
                    else 
                        {
                            response.send(actors);
                        }
                }            
                let respuesta
                if(peli1.actors != null)
                    {
                        respuesta = peli1.actors;
                    }
                    else
                    {
                            respuesta = {error: true, codigo: 200, mensaje: "La pel??cula no existe"}      
                    }
                    response.send(respuesta);
            });

app.get('/pelicula/director', 
        function (request, response) 
            {
                let respuesta
                if(peli1.director != null)
                {
                    respuesta = peli1.director;
                }
                else
                {
                    respuesta = {error: true, codigo: 200, mensaje: "El director no existe"}
            ???    }
                    response.send(respuesta);
            });
            ???
app.get('/pelicula/guionista',
        function (request, response) 
            {
                let respuesta
                if(peli1.writer != null)
                {
                    respuesta = peli1.writer;
                }
                else
                {
                    respuesta = {error: true, codigo: 200, mensaje: "El guionista no existe"}
            ???    }   
                    response.send(respuesta);
            });

app.post('/pelicula/actor', 
        function(request, response)
            {
               
                let name = request.body.name;
                let genre = request.body.genre;
                let weight = request.body.weight;
                let height = request.body.height;
                let hairColor = request.body.hairColor;
                let eyeColor = request.body.eyeColor;
                let race = request.body.race;
                let isRetired = request.body.isRetired;
                let nationality = request.body.nationality;
                let oscarNumber = request.body.oscarNumber;
                let profession = request.body.profession;
            ???
                newProfesional = new Professional (name, genre, weight, height, hairColor,
                    eyeColor, race, isRetired, nationality,oscarNumber, profession)
                actors.push(newProfesional)
                response.send(newProfesional)                    
            })           ???
app.post('/pelicula/director', function(request, response)
            {               
                let name = request.body.name;
                let genre = request.body.genre;
                let weight = request.body.weight;
                let height = request.body.height;
                let hairColor = request.body.hairColor;
                let eyeColor = request.body.eyeColor;
                let race = request.body.race;
                let isRetired = request.body.isRetired;
                let nationality = request.body.nationality;
                let oscarNumber = request.body.oscarNumber;
                let profession = request.body.profession;
            ???
                director = new Professional (name, genre, weight, height, hairColor,
                    eyeColor, race, isRetired, nationality,oscarNumber, profession)
                response.send(director)                    
            })
            ???
app.post('/pelicula/guionista',
         function(request, response)
            {               
                let name = request.body.name;
                let genre = request.body.genre;
                let weight = request.body.weight;
                let height = request.body.height;
                let hairColor = request.body.hairColor;
                let eyeColor = request.body.eyeColor;
                let race = request.body.race;
                let isRetired = request.body.isRetired;
                let nationality = request.body.nationality;
                let oscarNumber = request.body.oscarNumber;
                let profession = request.body.profession;
            ???
                writer = new Professional (name, genre, weight, height, hairColor,
                                            eyeColor, race, isRetired, nationality,
                                            oscarNumber, profession)
                response.send(writer)
                    
            });

app.put("/pelicula/actor",
        function(request, response)
        {
            let respuesta
            if(peli1.actors[request.body.id] != null)
            {   
                id= request.body.id
                if(request.body.name != null)
                {
                    actors[id].name = request.body.name;
                }
                if(request.body.genre != null)
                {
                    actors[id].genre = request.body.genre;
                }
                if(request.body.weight != null)
                {
                    actors[id].weight = request.body.weight;
                }
                if(request.body.hairColor != null)
                {
                    actors[id].hairColor = request.body.hairColor;
                }
                if(request.body.eyeColor != null)
                {
                    actors[id].eyeColor = request.body.eyeColor;
                }
                if(request.body.race != null)
                {
                    actors[id].race = request.body.race;
                }
                if(request.body.isRetired != null)
                {
                    actors[id].isRetired = request.body.isRetired;
                }
                if(request.body.nationality != null)
                {
                    actors[id].nationality = request.body.nationality;
                    }
                if(request.body.oscarNumber != null)
                {
                    actors[id].oscarNumber = request.body.oscarNumber;
                }
                if(request.body.profession != null)
                {
                    actors[id].profession = request.body.profession;
                }
            
                   respuesta = {error: false, codigo: 200, 
                                mensaje: "Actor actualizado", resultado: actors[request.body.id]};
    ???
                    response.send(respuesta)
                }else{
                    respuesta = {error: true, codigo: 200,
                        mensaje: "No hay actor", resultado: actors[request.body.id] 
                   }
                   response.send(respuesta)
    ???
            }
        });
    ???
    ???
app.put("/pelicula/guionista",
        function(request, response)
        {
            let respuesta
            if(peli1.writer != null)
            {
                if(request.body.name != null)
                {
                    peli1.writer.name = request.body.name;
                }
                if(request.body.genre != null)
                {
                    peli1.writer.genre = request.body.genre;
                }
                if(request.body.weight != null)
                {
                    peli1.writer.weight = request.body.weight;
                }
                if(request.body.hairColor != null)
                {
                    peli1.writer.hairColor = request.body.hairColor;
                }
                if(request.body.eyeColor != null)
                {
                    peli1.writer.eyeColor = request.body.eyeColor;
                }
                if(request.body.race != null)
                {
                    peli1.writer.race = request.body.race;
                }
                if(request.body.isRetired != null)
                {
                    peli1.writer.isRetired = request.body.isRetired;
                }
                if(request.body.nationality != null)
                {
                    peli1.writer.nationality = request.body.nationality;
                }
                if(request.body.oscarNumber != null)
                {
                    peli1.writer.oscarNumber = request.body.oscarNumber;
                }
                if(request.body.profession != null)
                {
                    peli1.writer.profession = request.body.profession;
                }
        
               respuesta = {error: false, codigo: 200, 
                            mensaje: "Guionista actualizado", resultado: peli1.writer};
    ???
                response.send(respuesta)
            }
            else
            {
                respuesta = {error: true, codigo: 200,
                            mensaje: "No hay guionista", resultado:peli1.writer}
                response.send(respuesta)   ???
            }
        });
app.delete("/pelicula/actor",
        function(request, response)
        {
            let respuesta
                let id = request.body.id
            if (peli1.actors[id] != null)
            {
                respuesta = {error: false, codigo: 200, mensaje: "Actor borrado", resultado: actors[id]};
                actors.splice([id],1);
            }
            else    
                respuesta= {error:true, codigo:200, mensaje: "el Actor no existe", resultado: actors[id]};
        ???
                response.send(respuesta)
                
        });
        ???
app.delete("/pelicula/director",
        function(request, response)
        {
            let respuesta
            if (peli1.director != null)
            {
                peli1.director = null;
                respuesta = {error: false, codigo: 200, mensaje: "Director borrado", resultado: peli1.director};
            }
            else
            {
                respuesta= {error:true, codigo:200, mensaje: "El director no existe", resultado: peli1.director};        ???
                response.send(respuesta)
            }    
                
        });        ???
app.delete("/pelicula/guionista",
        function(request, response)
        {
            let respuesta
            if (peli1.writer != null)
            {
                peli1.writer = null;
                respuesta = {error: false, codigo: 200, mensaje: "Guionista borrado", resultado: peli1.writer};
            }
            else
            {    
                respuesta= {error:true, codigo:200, mensaje: "El guionista no existe", resultado: peli1.writer};        ???
                response.send(respuesta);
            }
                
        });


            ???
            ???
            
            