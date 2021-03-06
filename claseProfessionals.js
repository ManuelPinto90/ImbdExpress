const express= require("express");
const app = express()
app.use(express.urlencoded({extended:false}))
app.use(express.json());
// Clase
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
var actor1 = new Professional("Juan", 45, "Male", 80 , 185, "Brown", "Black", "Black", false, "Nigerian", 0 , "Actor" );
var actor2 = new Professional("Felipe", 36, "Male", 65, 170, "Black", "Green", "Caucasic", false, "Spanish", 0, "Actor" );
var actor3 = new Professional("Leonardo di Caprio", 48, "Male", 80, 1.82, "Blondy", "Blue", "Aria", false, "Yankee", 12, "Actor");
var actor4 = new Professional("Mark Hammill", 69, "Male", 80, 172, "brown", "blue", "caucasian", false, "US citizen", 0, "Actor");
var director = new Professional("Sara", 36, "Female", 50, 168, "Blond", "Blue", "Caucasic", false, "French",0 , "Director");
var writer = new Professional("Ana", 28, "Female", 54, 164, "Black", "Brown", "Caucasic", false, "Spanish", 0 , "Writer");

var profesionales = [actor1,actor2, actor3, actor4, director, writer];

app.get('/profesionales', 
    function(request,response)
    {
        
        if(request.query.id != null)
        {
            response.send(profesionales[request.query.id])
        }
        else
        {
            response.send(profesionales)
        }        
    });
app.post('/profesionales', function(request,response)
    {
        var name= request.body.name;
        var age= request.body.age;
        var genre= request.body.genre;
        var weight= request.body.weight;
        var height= request.body.height;
        var hairColor= request.body.hairColor;
        var eyeColor= request.body.eyeColor;
        var race= request.body.race;
        var isRetired= request.body.isRetired;
        var nationality= request.body.nationality;
        var oscarNumber= request.body.oscarNumber;
        var profession= request.body.profession;

        newProfesional = new Professional(name, age, genre, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarNumber, profession)
        profesionales.push(newProfesional)
        response.send(newProfesional)             
    });
app.put('/profesionales', function(request, response)
{   
    var respuesta;
    if(profesionales[request.body.id])
    {       
            id = request.body.id
            if(request.body.name != null)
            {
                profesionales[id].name = request.body.name;
            } 
            if(request.body.age != null)
            {    
                profesionales[id].age = request.body.age;
            }
            if(request.body.genre != null)
            {    
                profesionales[id].genre= request.body.genre;
            }
            if(request.body.weight != null)
            {
                profesionales[id].weight= request.body.weight;
            }
            if(request.body.height != null)
            {
                profesionales[id].height= request.body.height;
            }
            if(request.body.hairColor != null)
            {
                profesionales[id].hairColor= request.body.hairColor;
            }
            if(request.body.eyeColor != null)
            {
                profesionales[id].eyeColor= request.body.hairColor;
            }
            if(request.body.race != null)
            {
                profesionales[id].race= request.body.race;
            }
            if(request.body.isRetired != null)
            {
                profesionales[id].isRetired= request.body.isRetired;
            }
            if(request.body.nacionality != null)
            {
                profesionales[id].nacionality= request.body.nacionality;
            }
            if(request.body.oscarNumber != null)
            {
                profesionales[id].oscarNumber= request.body.oscarNumber;
            }
            if(request.body.profession != null)
            {
                profesionales[id].profession= request.body.profession;
            }
            respuesta ={error:false, codigo:200,
                        mensaje:'Profesional actualizado', resultado: profesionales[request.body.id]};
            
            response.send(respuesta);
   
    }
    else
    {
        respuesta ={error:true, codigo:200,
        mensaje:'No hay profesional en esta id', resultado: profesionales[request.body.id]
    }
    response.send(respuesta)
    }         
});
app.delete('/profesionales', function(request, response)
{
    let respuesta;
    if(profesionales != null)
    {
        profesionales.splice(request.body.id);
        respuesta = {error:false, codigo:200,
            mensaje:'Profesional eliminado', resultado: profesional}
    }
    else
    {
        respuesta = {error:true, codigo:200,
        mensaje:'El profesional no existe', resultado: profesional}
    }        
    response.send(respuesta)        
});
app.listen(3000);