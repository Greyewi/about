import React from 'react';
import {Layout, GlobalStyles} from './styles';
import Header from './Components/Header';
import {Switch, Route} from 'react-router-dom';
import Main from './Pages/Main';
import Portfolio from "./Pages/Portfolio";
import RoadMap from "./Components/RoadMap";
import CV from "./Components/CV";

function App() {
    return (
        <Layout className="App-header">
            <GlobalStyles/>
            <Header/>
            <Switch>
                <Route exact path="/"><Main/></Route>
                <Route path="/portfolio"><RoadMap/></Route>
                <Route path="/cv"><CV/></Route>
                <Route path="*">404</Route>
            </Switch>
        </Layout>
    )
}

export default App;
