const persona = {
  nombre:"Miryam Yanit Baranda Moreno",
  edad: 21,
  profesion: "Estudiante",
  pasatiempos: [
      "Leer",
      "Ver series",
      "Dormir",
      "Limpiar",
      "Jugar videojuegos",
  ],
  fecha_nacimiento: "14 de noviembre de 2002",
  lugar_nacimiento: "Tuxtepec, Oaxaca",
  signoZodiaco: "Escorpio",
}

function App() {

  return (
    <>
      <div>
       <h1>Información personal</h1>
       <hr />
       <ul>
        <li>Nombre: {persona.nombre}</li>
        <li>Edad: {persona.edad}</li>
        <li>Profesión: {persona.profesion}</li>
        <li>Pasatiempos: 
          <ul>
            <li>{persona.pasatiempos[0]}</li>
            <li>{persona.pasatiempos[1]}</li>
            <li>{persona.pasatiempos[2]}</li>
            <li>{persona.pasatiempos[3]}</li>
            <li>{persona.pasatiempos[4]}</li>
          </ul>
        </li>
        <li>Fecha de nacimiento: {persona.fecha_nacimiento}</li>
        <li>Lugar de nacimiento: {persona.lugar_nacimiento}</li>
        <li>Signo zodiacal: {persona.signoZodiaco}</li>
       </ul>
      </div>
    </>
  )
}

export default App
