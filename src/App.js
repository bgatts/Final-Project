import './App.css';
import Signup from './Signup'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';
import { AuthProvider } from './AuthContext';
import  {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from './Login'
import PrivateRoute from './PrivateRoute'
import ForgotPassword from './ForgotPassword'
import UpdateProfile from './UpdateProfile'
import Feed from './Feed'
import Post from './Post'
import { Component } from 'react';


class App extends Component {

  render(){
    return (

    <Container
    className="d-flex align-items-center justify-content-center"
    style={{ minHeight: "100vh" }}
    >
    <div className="w-100" style={{ maxWidth: "400px" }}>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />              
            <Route path="/forgot-password" component={ForgotPassword} />      
            <PrivateRoute path='/feed' component={Feed}/>
            <PrivateRoute path='/post' component={Post}/>
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  </Container>
)
  }
}

export default App;
