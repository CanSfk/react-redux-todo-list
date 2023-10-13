import { _setUser } from ".";
import { store } from "..";

export const setUser = (data) => store.dispatch(_setUser(data));
