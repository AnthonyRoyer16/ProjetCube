import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import DisplayAllUsers from './components/DisplayAllUsers';

const App = () => {
    return (
        <Router className="App_container">
            <Switch>
                <Route exact path="/users">
                    <DisplayAllUsers />
                </Route>
            </Switch>
        </Router>
    );

};

ReactDOM.render(<App />, document.getElementById('app'));