import React, {useEffect} from "preact/compat";
import {useRoutes} from "./Components/Router";
import {BrowserRouter} from "react-router-dom";
import {Helmet} from "react-helmet";


const App = () => {
    const routes = useRoutes()
    useEffect(() => {
        document.body.className = 'minimal'
    }, [])
    return (
        <>
            <Helmet>
                <title>My portfolio</title>
            </Helmet>
            <BrowserRouter>
                <div id="site-border-left" />
                <div id="site-border-right" />
                <div id="site-border-top" />
                <div id="site-border-bottom" />
                {routes}
            </BrowserRouter>
        </>
    );
}

export default App;
