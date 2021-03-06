app.get('/pelicula', function (request, response) 
{
    let respuesta
    if(peli1 != null)
        respuesta = peli1;
    else
        respuesta = {error: true, codigo: 200, mensaje: "La película no existe"}
        response.send(respuesta);
});
app.post('/pelicula', function (request, response)
{
    peli1 = null;
    let respuesta;
    if (peli1 === null)
    { 
            let title = request.body.title;
            let releaseYear = request.body.releaseYear;
            let nationality = request.body.nationality;
            let genre = request.body.genre;
            peli1 = new Movie(title,releaseYear, nationality, genre)
            response.send(peli1)
    }
    else{
        respuesta = {error: true, codigo: 200,
                        mensaje: "la película ya existe", resultado:peli1}
        }
    response.send(respuesta)
});
app.put("/pelicula",
        function(request, response){
            let respuesta
            if(peli1 != null)
            {
                if(request.body.title != null)
                {
                    peli1.title = request.body.title;
                }
                if(request.body.releaseYear != null)
                {
                    peli1.releaseYear = request.body.releaseYear;
                }
                if(request.body.nationality != null)
                {
                    peli1.nationality = request.body.nationality;
                }
                if(request.body.genre != null)
                {
                    peli1.genre = request.body.genre;
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
               
               respuesta = {error: false, codigo: 200, 
                            mensaje: "Pelicula actualizado", resultado: peli1};
                response.send(respuesta)
            }else{
                respuesta = {error: true, codigo: 200,
                    mensaje: "No hay pelicula", resultado:peli1
               }
               response.send(respuesta)
        }
    });
    app.delete("/pelicula",
            function(request, response)
            {
                    let respuesta
                    if (peli1 != null)
                    {
                        peli1 = null;
                        respuesta = {error: false, codigo: 200, mensaje: "Pelicula borrada", resultado: peli1};
                    }
                    else    
                        respuesta= {error:true, codigo:200, mensaje: "La pelicula no existe", resultado: peli1};
                        response.send(respuesta)
            });