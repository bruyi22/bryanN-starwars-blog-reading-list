import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
  const { store, dispatch } = useGlobalReducer();

  const favToPath = (apiUrl) => {
    const parts = apiUrl.split("/").filter(Boolean);
    const resource = parts[parts.length - 2]; // "people" | "planets" | "vehicles"
    const uid = parts[parts.length - 1];      // "4"

    if (resource === "people") return `/personaje/${uid}`;
    if (resource === "planets") return `/planet/${uid}`;
    if (resource === "vehicles") return `/vehicle/${uid}`;
    return "/";
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container d-flex justify-content-between">
        <Link to="/">
          <img
            src="https://i5.walmartimages.com/seo/Star-Wars-Logo-Picture-Cartoon-Character-Wall-Art-Vinyl-Sticker-Design-Decal-Girl-Boy-Kids-Bedroom-Nursery-Kindergarten-Fun-Home-Children-Room-Decor_97d371d2-00dd-4ed7-85cd-48e8099c3393_1.068cf2e7d751e8b137e88605bc3efadd.jpeg"
            alt="Star Wars"
            style={{ height: "50px", width: "50px" }}
          />
        </Link>

        <div className="ms-auto dropdown">
          <button
            className="btn btn-outline-primary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites{" "}
            <span className="badge bg-danger ms-2">
              {store.favorites.length}
            </span>
          </button>

          <ul className="dropdown-menu dropdown-menu-end" style={{ minWidth: 260 }}>
            {store.favorites.length === 0 ? (
              <li className="dropdown-item text-muted">No favorites yet</li>
            ) : (
              store.favorites.map((fav, idx) => (
                <li
                  key={fav.id || idx}
                  className="d-flex align-items-center justify-content-between px-2"
                >
                  <Link className="dropdown-item" to={favToPath(fav.id)}>
                    {fav.name}
                  </Link>

                  <button
                    className="btn btn-sm btn-outline-danger ms-2"
                    onClick={() =>
                      dispatch({ type: "toggle_favorite", payload: fav })
                    }
                    title="Remove"
                  >
                    x
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
