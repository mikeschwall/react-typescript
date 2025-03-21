import { Dispatch } from "redux";
import { actionTypes } from "./types";
import axios from "axios";

export interface Package {
    package: {
        name:string;
        description: string;
    }
    
}


export interface GetPackageAction {
    type: actionTypes.FETCH_PACKAGES;
    payload: Package[];
}

export const getPackages = (q:string) => {
    return async (dispatch:Dispatch) => {
        const {data} = await axios.get(`https://registry.npmjs.org/-/v1/search?text=${q}`);
        const description = data.objects[0].package.description;
        console.log(data.objects.package);
        
        console.log(description);
        
        dispatch({
            type: actionTypes.FETCH_PACKAGES,
            payload: data.objects
        })
    }
}