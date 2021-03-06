const express= require("express");
const bodyParser = require("body-parser");
const app = express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
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

var profesionales = [actor1,actor2,actor3,actor4,director,writer
app.post('/profesionales', function (request, response)
{
    let name = request.body.name;
    let genre = request.body.genre;
    let weight = request.body.weight;
    let height = request.body.height;
    let hairColor = request.body.hairColor;
    let eyeColor = request.body.eyeColor;
    let race = request.body.race;
    let retired = request.body.isRetired;
    let nationality = request.body.nationality;
    let oscars = request.body.oscarsNumber;
    let profession = request.body.profession;
    proNuevo = new Professional(name, genre, weight, height, hairColor,
            eyeColor, race, retired, nationality,oscars, profession)
            profesionales.push(proNuevo)
    response.send(proNuevo)
});
app.put("/profesionales",
        function(request, response){
            let respuesta
            if(profesionales[request.body.id])
            {
                id = request.body.id
                if(request.body.name != null)
                {
                    profesionales[id].name = request.body.name;
                }
                if(request.body.genre != null)
                {
                    profesionales[id].genre = request.body.genre;
                }
                if(request.body.weight != null)
                {
                    profesionales[id].weight = request.body.weight;
                }
                if(request.body.height != null)
                {
                    profesionales[id].height = request.body.height;
                }
                if(request.body.hairColor != null)
                {
                    profesionales[id].hairColor = request.body.hairColor;
                }
                if(request.body.eyeColor != null)
                {
                    profesionales[id].eyeColor = request.body.eyeColor;
                }
                if(request.body.race != null)
                {
                    profesionales[id].race = request.body.race;
                }
                if(request.body.isRetired != null) 
                {
                    profesionales[id].Retired = request.body.isRetired;
                }
                if(request.body.nationality != null) 
                {
                    profesionales[id].nationality = request.body.nationality;
                }
                if(request.body.oscarsNumber != null)
                {
                    profesionales[id].oscars = request.body.oscarsNumber;
                }
                if(request.body.profession != null)
                {
                    profesionales[id].profession = request.body.profession;
                }
               respuesta = {error: false, codigo: 200, 
                            mensaje: "profesional actualizado", resultado: profesionales[request.body.id]};
                response.send(respuesta)
            }else{
                respuesta = {error: true, codigo: 200,
                    mensaje: "Su id no está identificado", resultado:profesionales[request.body.id]
               }
               response.send(respuesta)
        }
    });
app.listen(3000)