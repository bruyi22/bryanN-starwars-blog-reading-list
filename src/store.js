export const initialStore = () => {
  return {
    message: null,
    character: [],
    planet: [],
    vehicle: [],
    favorites: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    // case 'add_task':

    //   const { id, color } = action.payload

    //   return {
    //     ...store,
    //     todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
    //   };


    //////////////////////////
    case "get_personajes":
      const { personaje } = action.payload
      return {
        ...store, character: personaje

      };

    case 'get_planetas':
      const { planetas } = action.payload
      return {
        ...store, planet: planetas
      };

    case 'get_vehicles':
      const { vehicles } = action.payload
      return {
        ...store, vehicle: vehicles
      };

    case 'toggle_favorite':
      const {id} = action.payload
      const exists = store.favorites.some(f => f.id === action.payload.id);
       
      return {
        ...store,
        favorites: exists
          ? store.favorites.filter(f => f.id !== action.payload.id)
          : [...store.favorites, action.payload]
      };
    ///////////////////////////
    default:
      throw Error('Unknown action.');
  }
}