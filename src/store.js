export const initialStore = () => {
    return {
        message: null,
        character: [],
        favorites: [],  
        characterDetail: null,
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

    default: 
      return store;

  }  
}   