import { _addTodo, _deleteTodo, _updateTodo } from ".";
import { store } from "../../stores";

export const addTodo = (data) => store.dispatch(_addTodo(data));
export const deleteTodo = (data) => store.dispatch(_deleteTodo(data));
export const updateTodo = (data) => store.dispatch(_updateTodo(data));
