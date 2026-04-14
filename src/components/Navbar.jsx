import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
    const { store, dispatch } = useGlobalReducer()

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <Link to="/">
                    <span className="navbar-brand mb-0 h1">Star Wars</span>
                </Link>
                <div className="ml-auto d-flex gap-2">
                    <Link to="/starwars">
                        <button className="btn btn-danger">Starwars</button>
                    </Link>

                    {/* Dropdown de favoritos */}
                    <div className="dropdown">
                        <button className="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown">
                            ⭐ Favoritos ({store.favorites.length})
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                            {store.favorites.length === 0 ? (
                                <li><span className="dropdown-item text-muted">No hay favoritos</span></li>
                            ) : (
                                store.favorites.map((fav) => (
                                    <li key={fav.uid} className="dropdown-item d-flex justify-content-between align-items-center">
                                        <span>{fav.name}</span>
                                        <button className="btn btn-sm btn-danger ms-2" onClick={() => dispatch({
                                            type: "remove_favorite",
                                            payload: { uid: fav.uid }
                                        })}>🗑️</button>
                                    </li>
                                ))
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};