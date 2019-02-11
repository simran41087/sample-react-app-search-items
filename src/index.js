import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Router, Route, browserHistory} from "react-router";

class Root extends React.Component {
    render() {
        return(
            <Router history={browserHistory}>
                <Route path={"user"} component={import('./components/ProductCategoryRow').ProductCategoryRow}></Route>
            </Router>
        );   
    }
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
