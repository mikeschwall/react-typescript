import React from "react";
import {connect} from 'react-redux';
import { useState,FormEvent } from "react";
import { getPackages, Package } from "../actions";
import { AppState } from "../reducers";



interface StateProps {
    packages: Package[];
}

interface DispatchProps {
    getPackages: (str:string) => void;
}

type MergedProps = StateProps & DispatchProps;

const Search:React.FC<MergedProps> = ({packages,getPackages}) => {
    console.log("from component",packages);

    const [text,setText] = useState('');
    
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        getPackages(text);
    }

    return (
        <div style={{marginLeft:"20px"}}>
            <h2>Search NPM Registry</h2>
            <form onSubmit={handleSubmit}>
            <input placeholder="e.g jquery" onChange={handleChange} type="text" value={text} /> <button type="submit">Search</button>
            </form>

            {packages && packages.map((item) => <li key={item.package.name}>{item.package.name} 
                <button style={{margin:"5px"}} onClick={() => alert(item.package.description)}>Info</button>
            </li>)}
        </div>
    )
}

const mapStateToProps = (state:AppState) => {
    return {
        packages: state.packages
    }
}

const mapDispatchToProps = {
    getPackages: getPackages
}

export default connect(mapStateToProps,mapDispatchToProps)(Search);