import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Contact from './Contact';

class App extends Component {
    state = {
        redirect: false
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/contact' />
        }
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/contact' component={Contact} />
                </Switch>
                <div>
                    {this.renderRedirect()}
                    <button onClick={this.setRedirect}>Redirect</button>
                </div>
            </Router>
        )
    }
}

export default App;