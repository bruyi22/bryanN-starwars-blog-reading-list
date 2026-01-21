
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";


const CardPeople = ({ people }) => {
    const { store, dispatch } = useGlobalReducer()

    const favorite = {
        id: people.url,
        name: people.name
    }
    const isFavorite = store.favorites.some(f => f.id === people.url);


    return (
        <div>
            <div className="card" style={{ width: "18rem" }}>
                <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/people/${people.uid}.jpg`} className="card-img-top" alt="..." />
                <h5 className="card-title">Name: {people.name}</h5>
                <div className="card-body mt-auto row">
                    <Link to={`/personaje/${people.uid}`} className="btn btn-primary col">Details</Link>
                    <button
                        className={`btn ${isFavorite ? "btn-warning" : "btn-outline-warning"}`}
                        onClick={() => dispatch({
                            type: "toggle_favorite",
                            payload: {
                                id: people.url,
                                name: people.name
                            }
                        })
                        }
                    >
                        {isFavorite ? "★ Favorite" : "☆ Favorite"}
                    </button>
                </div>
            </div>
        </div>
    )



}

export default CardPeople;