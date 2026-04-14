import {useParams} from 'react-router-dom'
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, {useEffect} from 'react'; 

export const DetailPeople = () => {

  const {store, dispatch} =useGlobalReducer()
  const {uid} = useParams() 

async function  detallePersonaje(){ 
    try {
      const response = await fetch("https://www.swapi.tech/api/people/" + uid); 
      if (!response.ok) {
        throw new Error(`Error al obtener detalles del personaje: ${response.statusText}`)
      }

      const data = await response.json()
   
      dispatch({
        type: "set_personaje_detalle", 
        payload:  { personajeDetalle: data.result.properties }
      })
 
    } catch (error) {
      console.error("Error en cargar personajes:", error)
    }
  }


    useEffect(() => {
      detallePersonaje()
    }, [uid])
 
  return (
    <div className="container">
      <div className="d-flex gap-4 mt-4">

        {/* Tarjeta izquierda */}
        <div className="card" style={{ minWidth: "300px" }}>
          <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/people/${uid}.jpg`} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{store.characterDetail?.name}</h5>
            <p className="card-text">Detalles del personaje</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Altura: {store.characterDetail?.height}</li>
            <li className="list-group-item">Peso: {store.characterDetail?.mass}</li>
            <li className="list-group-item">Género: {store.characterDetail?.gender}</li>
            <li className="list-group-item">Año de nacimiento: {store.characterDetail?.birth_year}</li>
            <li className="list-group-item">Color de ojos: {store.characterDetail?.eye_color}</li>
          </ul>
        </div>

        {/* Texto al lado derecho */}
        <div className="d-flex flex-column justify-content-center">
          <h2>{store.characterDetail?.name}</h2>
          <p style={{ color: "#aaaaaa", lineHeight: "1.8" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p style={{ color: "#aaaaaa", lineHeight: "1.8" }}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

      </div>
    </div>
  );
}; 