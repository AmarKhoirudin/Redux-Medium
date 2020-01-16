import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "../Container/Home";
import Details from "../Container/Detail";
import Navbar from '../Component/Navbar';
const Routes = () => {
    return (
        <Router>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route path="/detail" component={Details} />
        </Router>
    )
}

export default Routes;
