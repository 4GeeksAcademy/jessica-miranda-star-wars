// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import { CardPeople } from "../components/CardPeople.jsx"; 

export const Starwars = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer()

  async function  cartaPersonajes(){ 
    try {
      const response = await fetch("https://www.swapi.tech/api/people/"); 
      if (!response.ok) {
        throw new Error("Error al obtener personajes: ${response.statusText}")
      }

      const data = await response.json()
      const personajesBasicos = data.results; 
      dispatch({
        type: "set_personajes", 
        payload: {personajes:personajesBasicos}
      })

    } catch (error) {
      console.error("Error en cargar personajes:", error)
    }
  }

   // fetch("https://www.swapi.tech/api/people/")
     //   .then(res => res.json())
     //   .then(data => console.log(data.results))
      //  .catch(err => console.error(err))

  return (
    <div className="container">
      <h2>Starwars</h2>
      <h3>People</h3> 
         <CardPeople/> 

      <h3>Planets</h3> 
      {/* <componente_carta_planets/> */}

      <h3>Vehicles</h3> 
      {/* <componente_carta_vehicles/> */}

      <Link to="/">
        <button className="btn btn-primary">Back home</button>
      </Link>
    </div>
  );
};
