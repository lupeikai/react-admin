import React,{FC,ReactNode} from 'react'
import {HashRouter as Router,Route,Switch,Redirect,RouteComponentProps} from 'react-router-dom';
import Login from '../views/Login';
import NewsSanBox from '../views/sanBox/NewsSanBox';
export default function IndexRouter() {
  return (
    <Router>
      <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/' render={()=>
          localStorage.getItem('Token')?<NewsSanBox></NewsSanBox>:<Redirect to='/login'/>
        }/>
      </Switch>
    </Router>
  )
}
