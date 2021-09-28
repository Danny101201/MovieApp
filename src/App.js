import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './components/Home/Home'
import MovieDetail from './components/MovieDetail/MovieDetail'
import Header from './components/Header/Header'
import PageNotFound from './components/PageNotFound/PageNotFound'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/movie/:imbdID" component={MovieDetail}></Route>
            <Route component={PageNotFound}></Route>
          </Switch>
        </div>
        <Footer></Footer>
      </Router>
    </div>
  )
}

export default App
