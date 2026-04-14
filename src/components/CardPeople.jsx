import { Link } from "react-router-dom";

export const CardPeople = ({people}) => {
    if (!people) return null;

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{people.name}</h5>
                <p className="card-text">
                    Click para ver más detalles de este personaje.
                </p>
                <Link to={`/people/${people.uid}`} className="btn btn-primary btn-sm">
                    Ver detalles
                </Link>
            </div>
        </div>
    );
};
