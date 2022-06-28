import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../Home"
import Messege from '../Messege'
import Setting from "../Setting"
import myAccount from "../myAccount"
import Post from "../Post"

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Post} />
          <Route exact path='/message' component={Messege} />
          <Route exact path='/setting' component={Setting} />
          <Route exact path='/myprofile' component={myAccount} />
        </Switch>
      </Router>
    </>
  )
}

export default Pages
