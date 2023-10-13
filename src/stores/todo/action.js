import { _addTodo, _deleteTodo } from ".";
import { store } from "../../stores";

export const addTodo = (data) => store.dispatch(_addTodo(data));
export const deleteTodo = (data) => store.dispatch(_deleteTodo(data));
