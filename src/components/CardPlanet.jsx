import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

const CardPlanet = ({ planet }) => {
  const { store, dispatch } = useGlobalReducer();

  const favorite = {
    id: planet.url,
    name: planet.name
  }

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/assets/img/planets/${planet.uid}.jpg`}
        className="card-img-top"
        alt={planet.name}
      />
      <h5 className="card-title">Name: {planet.name}</h5>
      <div className="card-body mt-auto row">
        <Link to={`/planet/${planet.uid}`} className="btn btn-primary col">Details</Link>
        <button
          className={`btn ms-2 ${store.favorites.some(f => f.uid === planet.uid)
              ? "btn-warning"
              : "btn-outline-warning"
            }`}
          onClick={() => dispatch({
            type: "toggle_favorite",
            payload: favorite
          })}
        >
          Fav
        </button>
      </div>
    </div>
  );
};

export default CardPlanet;