import React from "react";

import {Route} from 'react-router-dom'

import {Header} from "./Components/Header";
import {PizzaBlock} from "./Components/PizzaBlock";
import {Home} from "./Pages/Home";


function App() {
    return (
        <div>
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Route path={'/'} component={Home}/>
                </div>
            </div>
        </div>
    );
}

export default App;
