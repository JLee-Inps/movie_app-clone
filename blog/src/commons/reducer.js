
import { ADD, DELETE } from "./action";

const initialState = {
    todos: [],
};

export const reducer = ( state = initialState, action ) => {
    console.log("todo todo: " + JSON.stringify(action.todo));
    if ( action.type === ADD ) {
        return {
            todos: [ ...state.todos, action.todo ],
        };

    } else if ( action.type === DELETE ) {
        console.log("todo id: " + action.id);
        return {
            todos: [ ...state.todos.filter((todo) => todo.id !== action.id)],
        };
    } else {
        return state;
    }
};
