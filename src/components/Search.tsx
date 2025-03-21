import React from "react";
import {connect} from 'react-redux';
import { useState,FormEvent } from "react";
import { getPackages, Package } from "../actions";
import { AppState } from "../reducers";
import ItemModal from "./ItemModal";


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
        setText('');
    }

    return (
        <div style={{marginLeft:"20px"}}>
            <div className="page-header">
  <h1>Search NPM Registry</h1>
</div>
            <form onSubmit={handleSubmit}>
            <input placeholder="e.g jquery" onChange={handleChange} type="text" value={text} /> <button type="submit">Search</button>
            </form>

            {packages && packages.map((item) => <li key={item.package.name}>{item.package.name} 
            <ItemModal desc={item.package.description}/>
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