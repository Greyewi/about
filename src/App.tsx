import React from 'react';
import {Layout, GlobalStyles} from './styles'
import Header from './Components/Header'
import {Switch, Route} from 'react-router-dom'
import Main from './Pages/Main'

function App() {
    return (
        <Layout className="App-header">
            <GlobalStyles/>
            <Header/>
            <Switch>
                <Route exact path="/"><Main/></Route>
                <Route path="/portfolio"></Route>
                <Route path="/links"></Route>
                <Route path="*">404</Route>
            </Switch>
        </Layout>
    )
}

export default App;
