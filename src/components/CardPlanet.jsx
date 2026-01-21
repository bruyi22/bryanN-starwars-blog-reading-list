import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

const CardPlanet = ({ planet }) => {
  const { store, dispatch } = useGlobalReducer();

  const favorite = {
    id: planet.url,
    name: planet.name
  }
  const isFavorite = store.favorites.some(f => f.id === planet.url);


  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/planets/${planet.uid}.jpg`} className="card-img-top" alt="..." />
        <h5 className="card-title">Name: {planet.name}</h5>
        <div className="card-body mt-auto row">
          <Link to={`/planet/${planet.uid}`} className="btn btn-primary col">Details</Link>
          <button
            className={`btn ${isFavorite ? "btn-warning" : "btn-outline-warning"}`}
            onClick={() => dispatch({
              type: "toggle_favorite",
              payload: {
                id: planet.url,
                name: planet.name,
                path: `/planet/${planet.uid}`
              }
            })
            }
          >
            {isFavorite ? "★ Favorite" : "☆ Favorite"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPlanet;