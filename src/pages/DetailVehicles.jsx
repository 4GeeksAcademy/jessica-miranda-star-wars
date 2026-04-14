import { useParams } from 'react-router-dom'
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from 'react';

export const DetailVehicles = () => {

    const { store, dispatch } = useGlobalReducer()
    const { uid } = useParams()

    async function detalleVehiculo() {
        try {
            const response = await fetch("https://www.swapi.tech/api/vehicles/" + uid);
            if (!response.ok) throw new Error(`Error: ${response.statusText}`)
            const data = await response.json()
            dispatch({
                type: "set_vehiculo_detalle",
                payload: { vehiculoDetalle: data.result.properties }
            })
        } catch (error) {
            console.error("Error en cargar vehículo:", error)
        }
    }

    useEffect(() => {
        detalleVehiculo()
    }, [uid])

    return (
        <div className="container">
            <div className="d-flex gap-4 mt-4">

                {/* Tarjeta izquierda */}
                <div className="card" style={{ minWidth: "300px" }}>
                    <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/vehicles/${uid}.jpg`} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{store.vehicleDetail?.name}</h5>
                        <p className="card-text">Detalles del vehículo</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Modelo: {store.vehicleDetail?.model}</li>
                        <li className="list-group-item">Fabricante: {store.vehicleDetail?.manufacturer}</li>
                        <li className="list-group-item">Costo: {store.vehicleDetail?.cost_in_credits} créditos</li>
                        <li className="list-group-item">Velocidad máx: {store.vehicleDetail?.max_atmosphering_speed}</li>
                        <li className="list-group-item">Pasajeros: {store.vehicleDetail?.passengers}</li>
                    </ul>
                </div>

                {/* Texto al lado derecho */}
                <div className="d-flex flex-column justify-content-center">
                    <h2>{store.vehicleDetail?.name}</h2>
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
