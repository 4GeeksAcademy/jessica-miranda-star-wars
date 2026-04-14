import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const CardVehicles = ({ vehicle }) => {
    if (!vehicle) return null;

    const { dispatch } = useGlobalReducer()

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/vehicles/${vehicle.uid}.jpg`} className="card-img-top" alt="" style={{ height: "300px" }} />
            <div className="card-body">
                <h5 className="card-title">{vehicle.name}</h5>
                <p className="card-text">Click para ver más detalles de este vehículo.</p>
                <Link to={`/vehicle/${vehicle.uid}`} className="btn btn-primary btn-sm">
                    Ver detalles
                </Link>
                <button onClick={() => dispatch({
                    type: "add_favorite",
                    payload: {
                        favorite: {
                            uid: vehicle.uid,
                            name: vehicle.name,
                            type: "vehicle"
                        }
                    }
                })} className="btn btn-warning btn-sm ms-2">
                    ⭐
                </button>
            </div>
        </div>
    );
};