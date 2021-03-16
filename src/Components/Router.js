import React from 'preact/compat'
import {Redirect, Route, Switch} from 'react-router-dom'
import NavBar from "./NavBar";

import MainRoute from '../routes/main'
import AboutRoute from '../routes/about'
import WorksListRoute from "../routes/list";
import ContactRoute from '../routes/contact'


export const useRoutes = () => (
    <>
            <NavBar />
            <Switch>
                <Route path="/" exact component={MainRoute} />
                <Route path="/contact" exact component={ContactRoute} />
                <Route path="/about" exact component={AboutRoute} />
                <Route path="/works" exact component={WorksListRoute} />
                <Redirect to="/" />
            </Switch>
    </>
)
