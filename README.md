En el TP Nº2 tenía un problema, donde se aplicaba el método updateOne de Mongoose, los resultados de consola no se mostraban correctamente.
Consultando con la IA de OpenAI, tomo la decisión de crear una función nueva asyncrona para esperar la finalización de cada operación antes de comenzar la siguiente.

Dicha función establece que

async function flujoDeOperaciones() { //La función flujoDeOperaciones...
  await insertSuperHero(); //... espera la finalización de la inserción de un nuevo superhéroe a la base de datos,
  await updateSuperHero('Prometeo') //...para recién entonces actualizar datos de dicho superhéroe
  await findSuperHeroes() //y mostrar todos los superhéroes, ...
  await deleteSuperHero('Prometeo') //...y entonces, borre el superhéroe 'Prometeo'.
}
