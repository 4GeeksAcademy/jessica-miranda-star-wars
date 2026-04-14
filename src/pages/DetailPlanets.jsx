import { useParams } from 'react-router-dom'
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from 'react';

export const DetailPlanets = () => {

    const { store, dispatch } = useGlobalReducer()
    const { uid } = useParams()

    async function detallePlaneta() {
        try {
            const response = await fetch("https://www.swapi.tech/api/planets/" + uid);
            if (!response.ok) {
                throw new Error(`Error al obtener detalles del planeta: ${response.statusText}`)
            }
            const data = await response.json()
            const planetaDetalles = data.result.properties;
            dispatch({
                type: "set_planeta_detalle",
                payload: { planetaDetalle: planetaDetalles }
            })
        } catch (error) {
            console.error("Error en cargar planeta:", error)
        }
    }

    useEffect(() => {
        detallePlaneta()
    }, [uid])

    return (
        <div className="container">
            <div className="d-flex gap-4 mt-4">

                {/* Tarjeta izquierda */}
                <div className="card" style={{ minWidth: "300px" }}>
                    <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/planets/${uid}.jpg`} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{store.planetDetail?.name}</h5>
                        <p className="card-text">Detalles del planeta</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Clima: {store.planetDetail?.climate}</li>
                        <li className="list-group-item">Terreno: {store.planetDetail?.terrain}</li>
                        <li className="list-group-item">Población: {store.planetDetail?.population}</li>
                        <li className="list-group-item">Diámetro: {store.planetDetail?.diameter}</li>
                        <li className="list-group-item">Gravedad: {store.planetDetail?.gravity}</li>
                    </ul>
                </div>

                {/* Texto al lado derecho */}
                <div className="d-flex flex-column justify-content-center">
                    <h2>{store.planetDetail?.name}</h2>
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