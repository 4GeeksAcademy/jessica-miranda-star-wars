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
      const personajesDetalles = data.result.properties; 
      dispatch({
        type: "set_personajes_detalle", 
        payload: {personajeDetalle: personajesDetalles}
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

            <div className="card" style={{width: "18rem"}}>
                <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">An item</li>
                        <li className="list-group-item">A second item</li>
                        <li className="list-group-item">A third item</li>
                    </ul>

            </div>


        </div>
    );
}; 