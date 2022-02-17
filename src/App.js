import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './componentes/Header';
import FormularioTareas from './componentes/FormularioTareas';
import ListarTareas from './componentes/ListarTareas';

const App = () => {

  //obtiene las tareas guardadas de localstorage
  const tareasGuardadas = localStorage.getItem('tareas') ? JSON.parse(localStorage.getItem('tareas')) : [];
  //establecemos el estado de las tareas
  const [tareas, cambiarTareas] = useState(tareasGuardadas);
  //guardando el estado dentro del local storage
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  },[tareas]);

  //accedemos a localstorage y comprobamos si mostrarCompletadas es null
  let configMostrarCompletadas = '';
  if(localStorage.getItem('mostrarCompletadas') === null){
    configMostrarCompletadas = true;
  } else {
    configMostrarCompletadas = localStorage.getItem('mostrarCompletadas') === 'true';
  }
  //el estado de mostrarCompletadas
  const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(configMostrarCompletadas);

  useEffect(() => {
    localStorage.setItem('mostrarCompletadas', mostrarCompletadas.toString());
  },[mostrarCompletadas]);

  //console.log(tareas);
  return (
    <div className='contenedor'>
      <Header mostrarCompletadas={mostrarCompletadas} cambiarMostrarCompletadas={cambiarMostrarCompletadas}/>
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas}/>
      <ListarTareas mostrarCompletadas={mostrarCompletadas} tareas={tareas} cambiarTareas={cambiarTareas}/>
    </div>
  );
}

export default App;
