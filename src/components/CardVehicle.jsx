import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

const CardVehicle = ({ vehicle }) => {
  const { store, dispatch } = useGlobalReducer();

  const favorite = {
    id: vehicle.url,
    name: vehicle.name
  }

  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/vehicles/${vehicle.uid}.jpg`} className="card-img-top" alt="..." />
        <h5 className="card-title">Name: {vehicle.name}</h5>
        <div className="card-body mt-auto row">
          <Link to={`/vehicle/${vehicle.uid}`} className="btn btn-primary col">Details</Link>
          <button
            className={`btn ms-2 col ${store.favorites.some(f => f.id === vehicle.id)
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
    </div>
  );
};

export default CardVehicle;