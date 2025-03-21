import { combineReducers } from "redux";
import { GetPackageAction, Package } from "../actions";
import { actionTypes } from "../actions/types";

export interface AppState {
    packages: Package[];
}

export const getPackageReducer = (state:Package[] = [], action:GetPackageAction) => {
    switch(action.type) {
        case actionTypes.FETCH_PACKAGES:
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers<AppState>({
    packages: getPackageReducer
})