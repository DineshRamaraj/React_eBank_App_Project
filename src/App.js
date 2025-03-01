import {Switch, Route, Redirect} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <div className="app-container">
    <Switch>
      <Route path="/ebank/login" component={Login} />
      <Route exact path="/" component={Home} />
      <Route exact path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </div>
)

export default App
