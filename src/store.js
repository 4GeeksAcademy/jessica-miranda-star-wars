export const initialStore = () => {
    return {
        message: null,
        character: [],
        favorites: []  
    }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){

    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };

    case 'set_personajes':
      const {personajes} = action.payload
      return {
        ...store, character:personajes
      } 

    default: 
      throw Error('Unknown action.');
  }    
}
