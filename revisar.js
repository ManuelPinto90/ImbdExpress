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
// Profesionales
var diCaprio = new Professional("Leonardo di Caprio", 48, "Male", 80, 1.82, "Blondy", "Blue", "Aria", false, "Yankee", 12, "Actor");
var markHamill = new Professional("Mark Hammill", 69, "male", 80, 172, "brown", "blue", "caucasian", false, "US citizen", 0, "Actor");
var carrieFisher = new Professional("Carrie Fisher", 60, "female", 65, 162, "grey", "brown", "caucasian", true, "US citizen", 0, "Actress");
var harrisonFord = new Professional("Harrison Ford", 78, "male", 92, 178, "grey", "black", "caucasian", false, "US citizen", 0, "Actor");
var georgeLucasD = new Professional("George Lucas", 76, "male", 102, 184, "grey", "brown", "caucasian", false, "US citizen", 0, "Director");
var georgeLucasW = new Professional("George Lucas", 76, "male", 102, 184, "grey", "brown", "caucasian", false, "US citizen", 0, "Director");
var karraElejalde = new Professional("Karra Elejalde", 60, "male", 110, 183, "black", "black", "caucasian", false, "Spanish", 0, "Actor");
var eduardFernandez = new Professional("Eduard Fernandez", 56, "male", 74, 170, "brown", "black", "caucasian", false, "Spanish", 0, "Actor");
var alejandroAmenabarD = new Professional("Alejandro Amenabar", 48, "male", 64, 174, "black", "black", "caucasian", false, "Spanish", 1, "Director");
var alejandroAmenabarW = new Professional("Alejandro Amenabar", 48, "male", 64, 174, "black", "black", "caucasian", false, "Spanish", 1, "Writer");
var chrisEvans = new Professional("Chris Evans", 39, "male", 90, 184, "brown", "green", "caucasian", false, "US citizen", 0, "Actor");
var robertDowneyJr = new Professional("Robert Downey Jr", 55, "male", 86, 179, "brown", "brown", "caucasian", false, "US citizen", 0, "Actor");
var scarlettJohansson = new Professional("Scarlett Johansson", 36, "female", 68, 165, "blond", "brown", "caucasian", false, "US citizen", 0, "Actress");
var tomHolland = new Professional("Tom Holland", 24, "male", 80, 180, "brown", "brown", "caucasian", false, "English", 0, "Actor");
var russoBrothers = new Professional("Anthony Russo & Joe Russo", 100, "male", 180, 180, "grey", "black", "caucasian", false, "US citizen", 0, "Director");
var stephenMcFeely = new Professional("Stephen McFeely", 51, "male", 67, 162, "red", "blue", "caucasian", false, "English", 0, "Writer");
var michaelBeck = new Professional("Michael Beck", 72, "Male", 84, 186, "Brown", "Brown", "caucasian", true, "US citizen", 0, "Actor");
var davidHarrys = new Professional("David Harris", 61, "Male", 76, 178, "Bald", "Brown", "Black", false, "US citizen", 0, "Actor");
var walterHill = new Professional("Walter Hill", 79, "Male", 80, 172, "White", "Green", "caucasian", true, "US citizen", 0, "Director");
var davidShaber = new Professional("David Shaber", 70, "Male", 70, 175, "Brown", "Brown", "caucasian", true, "US citizen", 0, "Writer");
var chrisPratt = new Professional("Chris Pratt", 41, "Male", 90, 191, "Blondy", "Green", "Nordic", false, "US citizen", 0, "Actor");
var zoeSaldanya = new Professional("Zoe Yadira Saldanya Nazario", 42, "Female", 54, 170, "Black", "Brown", "Black", false, "US citizen", 0, "Actress");
var jamesGunn = new Professional("James Gunn", 54, "male", 69, 170, "Brown", "Green", "caucasian", false, "US citizen", 0, "Director");
var nicolePerlman = new Professional("Nicole Perlman", 39, "Female", 60, 165, "Blond", "Green", "caucasian", false, "Us citizen", 0, "Writer");
var belenRueda = new Professional("Maria Belen Rueda Garcia-Porrero", 55, "Female", 56, 168, "Blond", "Green", "caucasian", false, "Spanish", 0, "Actress");
var ernestoAlterio = new Professional("Ernesto Federico Alterio Bacaicoa", 50, "Male", 68, 177, "Hoary", "Green", "caucasian", false, "Argentinian", 0, "Actor");
var alexDeLaIglesia = new Professional("Alejandro de La Iglesia Mendoza", 55, "Male", 90, 171, "Hoary", "Black", "caucasian", false, "Spanish", 0, "Director");
var jorgeGuerricaechevarría = new Professional("Jorge Guerricaechevarría", 56, "Male", 75, 175, "Bald", "Green", "caucasian", false, "Spanish", 0, "Writer");

// Creaciones y métodos
var profesional;
app.get('/claseProfessionals', 
    function(request,response)
    {
        if (profesional != null)
        {
            response.send(profesional);
        }
        else 
        {
            response.send({error:true, codigo:200,mensaje:"El profesional no existe"});
        }    
    })
app.post('/claseProfessionals', function(request,response)
{
    if (profesional == null)
    {
        profesional = new Professional  (request.body.name,
                            request.body.age,
                            request.body.genre,
                            request.body.weight,
                            request.body.height,
                            request.body.hairColor,
                            request.body.eyeColor,
                            request.body.race,
                            request.body.isRetired,
                            request.body.nationality,
                            request.body.oscarNumber,
                            prequest.body.profession)
        respuesta = {error:false, codigo:200,
                    mensaje:'Usuario creado', resultado: profesional};                    
    }   
    else
    {      
        respuesta = {error:true, codigo:200,
                    mensaje: 'Profesional existente', resultado: null}
    }
    response.send(respuesta);             
})
app.put('/claseProfessionals', function(request, response)
{
    if(profesional != null)
    {
            if(request.body.name != null)
            {
                profesional.name = request.body.name;
            } 
            if(request.body.age != null)
            {    
                profesional.age = request.body.age;
            }
            if(request.body.genre != null)
            {    
                profesional.genre= request.body.genre;
            }
            if(request.body.weight != null)
            {
                profesional.weight= request.body.weight;
            }
            if(request.body.height != null)
            {
                profesional.height= request.body.height;
            }
            if(request.body.hairColor != null)
            {
                profesional.hairColor= request.body.hairColor;
            }
            if(request.body.eyeColor != null)
            {
                profesional.eyeColor= request.body.hairColor;
            }
            if(request.body.race != null)
            {
                profesional.race= request.body.race;
            }
            if(request.body.isRetired != null)
            {
                profesional.isRetired= request.body.isRetired;
            }
            if(request.body.nationality != null)
            {
                profesional.nationality= request.body.nacionality;
            }
            if(request.body.oscarNumber != null)
            {
                profesional.oscarNumber= request.body.oscarNumber;
            }
            if(request.body.profession != null)
            {
                profesional.profession= request.body.profession;
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
app.listen(3000)