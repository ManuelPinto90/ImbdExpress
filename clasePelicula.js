const express= require("express");
const bodyParser = require("body-parser");
const app = express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
// Clase
class Movie
{
    constructor(title, releaseYear, nationality, genre)
    {
        this.title = title
        this.releaseYear = releaseYear
        this.nationality = nationality
        this.genre = genre
    }
}
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

app.post('/claseProfessionals', function(request,response)
    {
        if (pelicula == null)
        {
            pelicula =      {title: request.body.title,
                              releaseYear: request.body.releaseYear,
                              nationality: request.body.nationality,
                              genre: request.body.genre
                            }
            respuesta = {error:false, codigo:200,
                        mensaje:'Pelicula creada', resultado: profesional};                    
        }   
        else{      
            respuesta = {error:true, codigo:200,
                        mensaje: 'Pelicula existente', resultado: null}
        }
        response.send(respuesta);             
    })

app.put('/claseProfessionals', function(request, response)
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
                            mensaje:'Profesional actualizado', resultado: profesional}
                
                response.send(respuesta)
       
        }
        else
        {
            respuesta ={error:true, codigo:200,
            mensaje:'No hay profesional', resultado: profesional
        }
    
        response.send(respuesta)
        }         
    });
app.delete('/claseProfessionals', function(request, response)
    {
        let respuesta;
        if(profesional != null)
        {
            profesional = null;
            respuesta = {error:false, codigo:200,
                mensaje:'Profesional eliminado', resultado: profesional}
        }
        else
        {
            respuesta = {error:true, codigo:200,
            mensaje:'El profesional no existe', resultado: profesional}
        }        
        response.send(respuesta)        
    })
    
app.listen(3001)