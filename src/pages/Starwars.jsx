// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { CardPeople } from "../components/CardPeople.jsx"; 
import { CardPlanets } from "../components/CardPlanets.jsx";  
import React, { useEffect } from "react" 
import { CardVehicles } from "../components/CardVehicles.jsx";

export const Starwars = () => {
  const { store, dispatch } = useGlobalReducer()

  async function cartaPersonajes(){ 
    try {
      const response = await fetch("https://www.swapi.tech/api/people/"); 
      if (!response.ok) throw new Error(`Error: ${response.statusText}`)
      const data = await response.json()
      dispatch({ type: "set_personajes", payload: { personajes: data.results } })
    } catch (error) {
      console.error("Error en cargar personajes:", error)
    }
  }

  async function cartaPlanetas(){  
    try {
      const response = await fetch("https://www.swapi.tech/api/planets/"); 
      if (!response.ok) throw new Error(`Error: ${response.statusText}`)
      const data = await response.json()
      dispatch({ type: "set_planetas", payload: { planetas: data.results } })
    } catch (error) {
      console.error("Error en cargar planetas:", error)
    }
  }

  async function cartaVehiculos() {
    try {
        const response = await fetch("https://www.swapi.tech/api/vehicles/");
        if (!response.ok) throw new Error(`Error: ${response.statusText}`)
        const data = await response.json()
        dispatch({ type: "set_vehiculos", payload: { vehiculos: data.results } })
    } catch (error) {
        console.error("Error en cargar vehículos:", error)
    }
}

  useEffect(() => {
    cartaPersonajes()
    cartaPlanetas() 
    cartaVehiculos()  
  }, [])

  return (
    <div className="container">
      <h2>Starwars</h2>

      <h3>People</h3>
      <div className="d-flex" style={{
        overflowX: "auto",        /*  scroll horizontal */
        overflowY: "hidden",
        paddingBottom: "1rem",
        gap: "0.5rem",
        scrollbarWidth: "thin",              /* Firefox */
        scrollbarColor: "#f50c0cd0 #0a0a1a"   /* Firefox */
      }}>
        {store.character?.map((value, index) => (
          <CardPeople key={index} people={value} />
        ))}
      </div>

      <h3>Planets</h3>
      <div className="d-flex" style={{
        overflowX: "auto",        /*  scroll horizontal */
        overflowY: "hidden",
        paddingBottom: "1rem",
        gap: "0.5rem",
        scrollbarWidth: "thin",              /* Firefox */
        scrollbarColor: "#ff1f1fd6 #0a0a1a"   /* Firefox */
      }}>  
        {store.planets?.map((value, index) => (
          <CardPlanets key={index} planet={value} />
        ))}
      </div>

      <h3>Vehicles</h3>
      <div className="d-flex" style={{
        overflowX: "auto",       
        overflowY: "hidden",
        paddingBottom: "1rem",
        gap: "0.5rem",
        scrollbarWidth: "thin",              
        scrollbarColor: "#e90404da #040404d4"   
      }}>
        {store.vehicles?.map((value, index) => (
          <CardVehicles key={index} vehicle={value} />
        ))}
      </div>
    </div>
  );
};
