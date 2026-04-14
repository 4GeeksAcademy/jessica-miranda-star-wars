import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const CardPeople = ({people}) => {
    if (!people) return null;

     const { dispatch } = useGlobalReducer()

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/people/${people.uid}.jpg`} className="card-img-top" alt="" style={{ height: "300px" }} />
            <div className="card-body">  
                <h5 className="card-title">{people.name}</h5>
                <p className="card-text">
                    Click para ver más detalles de este personaje.
                </p>
                <Link to={`/character/${people.uid}`} className="btn btn-primary btn-sm">
                    Ver detalles
                </Link>
                <button onClick={() => dispatch({         
                    type: "add_favorite",
                    payload: {
                        favorite: {
                            uid: people.uid,
                            name: people.name,
                            type: "people"
                        }
                    }
                })} className="btn btn-warning btn-sm ms-2">
                    ⭐
                </button>
            </div>
        </div>
    );
};
