import React from "react";
import {Header} from "./Components/Header";
import {PizzaBlock} from "./Components/PizzaBlock";
import {Home} from "./Pages/Home";


function App() {
    return (
        <div>
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Home/>
                </div>
            </div>
        </div>
    );
}

export default App;
