import { _setModal, _removeModal } from ".";
import { store } from "../../stores";

export const setModal = (data) => store.dispatch(_setModal(data));
export const removeModal = () => store.dispatch(_removeModal());
