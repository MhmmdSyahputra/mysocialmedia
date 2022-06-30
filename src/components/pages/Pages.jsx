import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Setting from "../Setting"
import myAccount from "../myAccount"
import Home from "../Home"
import AllExplore from "../explore/AllExplore"
import OneItem from "../explore/OneItem"
import Message from "../Message"

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/message' component={Message} />
          <Route exact path='/setting' component={Setting} />
          <Route exact path='/myprofile' component={myAccount} />
          <Route exact path='/explore' component={AllExplore} />
          <Route exact path='/explore/:id' component={OneItem} />
        </Switch>
      </Router>
    </>
  )
}

export default Pages
