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
    
app.listen(3001)