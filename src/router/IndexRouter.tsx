import React,{FC} from 'react'
import {HashRouter as Router,Route,Switch} from 'react-router-dom';
import Login from '../views/Login';
import NewsSanBox from '../views/sanBox/NewsSanBox';
export default function IndexRouter() {
  return (
    <Router>
      <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/NewsSanBox' component={NewsSanBox}/>
      </Switch>
    </Router>
  )
}
