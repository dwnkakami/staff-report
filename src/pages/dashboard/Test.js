import React  from 'react';
import Dashboard from './Dashboard';
import Login from '../login';

var ReactDOM = require('react-dom');
function UserGreeting(props) {
  return <Dashboard />;
}

function GuestGreeting(props) {
  return <Login />;
}

const Test = () => {

  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }
  
  ReactDOM.render(
    // Try changing to isLoggedIn={true}:
    <Greeting isLoggedIn={false} />,
    document.getElementById('root')
  );
}

export default Test;
