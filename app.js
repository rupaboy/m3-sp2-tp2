const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Grupo-08:grupo08@cursadanodejs.ls9ii.mongodb.net/Node-js')
.then(()=> console.log('Conexión exitosa a MongoDB'))
.catch(error => console.error('Error al conectar a MongoDB:',error));



async function insertSuperHero() {
    const hero = new SuperHero( {
        nombreSuperHeroe: 'Prometeo',
        nombreReal: 'Lucio Lux',
        edad: 25,
        planetaOrigen: 'Tierra',
        debilidad: 'Aislamiento',
        poderes: ['Energía infinita', 'Fisión nuclear', 'Termo-conducción', 'Salto atmosférico'],
        aliados: ['Doomsday'],
        enemigos: ['Superman'],
        creador: 'Rupaboy'
    });
    await hero.save();
    console.log('Superhéroe insertado:', hero);
}

async function updateSuperHero(nombreSuperHeroe) {
    const result = await SuperHero.updateOne(
        {nombreSuperHeroe: nombreSuperHeroe },
        { $set: { edad: 30 } }
    );
    console.log('Resultado de la actualización:', result);
}

async function deleteSuperHero(nombreSuperHeroe) {
    const result = await SuperHero.deleteOne({ nombreSuperHeroe: nombreSuperHeroe });
    console.log('Superhéroe eliminado:', result);
}

async function findSuperHeroes() {
    const heroes = await SuperHero.find({ planetaOrigen: 'Tierra' });
    console.log('Superhéroes encontrados:', heroes);
}

const superheroSchema = new mongoose.Schema({
    nombreSuperHeroe: { type: String, required: true },
    nombreReal: { type: String, required: true },
    edad: { type: Number, min: 0 },
    planetaOrigen: { type: String, default: 'Desconocido'},
    debilidad: String,
    poderes: [String],
    aliados: [String],
    enemigos: [String],
    createdAt: { type: Date, default: Date.now },
    creador: String
}, { collection: 'Grupo-08' });

const SuperHero = mongoose.model('SuperHero', superheroSchema);


/*Con ayuda de ChatGPT, creamos una función para que las otras se ejecuten
de forma organizada, mostrando datos en pantalla que sean verídicos. */

async function flujoDeOperaciones() {
await insertSuperHero();
await updateSuperHero('Prometeo')
await findSuperHeroes()
await deleteSuperHero('Prometeo')
}

//Ejecución:
flujoDeOperaciones()