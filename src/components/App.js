import React, { Component } from "react";
import "./App.css";
import Nav from "./Nav.js";
import API from "../API.js";
import HomePage from "./HomePage.js";
import MoviePage from "./MoviePage.js";

import { 
  Route, 
  Switch, 
  BrowserRouter,
} from "react-router-dom";
import { 
  CSSTransition, 
  TransitionGroup 
} from "react-transition-group";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }
  
  async componentDidMount() {
    const movies = await API.getPopular();
    this.setState({ movies });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <main>
            <Nav />
            <Route
              render={({ location }) => {
                const { pathname } = location;
                return (
                  <TransitionGroup>
                    <CSSTransition 
                      key={pathname}
                      classNames="page"
                      timeout={{
                        enter: 1000,
                        exit: 1000,
                      }}
                    >
                      <Route
                        location={location}
                        render={() => (
                          <Switch>
                            <Route
                              exact
                              path="/"
                              render={(props) => <HomePage {...props} movies={this.state.movies}/>}
                            />
                            <Route
                              path="/moviepage/:id"
                              component={MoviePage}
                            />
                          </Switch>
                        )}
                      />
                    </CSSTransition>
                  </TransitionGroup>
                );
              }}
            />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
