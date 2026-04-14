export const initialStore = () => {
    return {
        message: null,
        character: [],
        favorites: [],  
        characterDetail: null,
        planets: [],          
        planetDetail: null, 
    }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){

    case 'add_task': {
      const { id, color } = action.payload
      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    }

    case 'set_personajes': {
      const { personajes } = action.payload
      return {
        ...store, character: personajes
      }
    }

    case 'set_personaje_detalle': {   // 👈 ahora sí dentro del switch
      const { personajeDetalle } = action.payload
      return {
        ...store, characterDetail: personajeDetalle
      }
    }

    case "add_favorite": {
      const { favorite } = action.payload
      return {
        ...store,
        favorites: [...store.favorites, favorite]
      }
    }

    case "remove_favorite": {
      const { uid } = action.payload
      return {
        ...store,
        favorites: store.favorites.filter((fav) => fav.uid !== uid)
      }
    }

    case 'set_planetas': {
    const { planetas } = action.payload
    return { ...store, planets: planetas }
}

case 'set_planeta_detalle': {
    const { planetaDetalle } = action.payload
    return { ...store, planetDetail: planetaDetalle }
}

case 'set_vehiculos': {
    const { vehiculos } = action.payload
    return { ...store, vehicles: vehiculos }
}

case 'set_vehiculo_detalle': {
    const { vehiculoDetalle } = action.payload
    return { ...store, vehicleDetail: vehiculoDetalle }
}

    default: 
      return store;

  }  
}   