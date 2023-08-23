import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/authSlice';
import Navigation from '../components/Navigation/Navigation';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import RegisterPage from '../components/RegisterPage/RegisterPage';
import LoginPage from '../components/LoginPage/LoginPage';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

const App = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      {isLoggedIn && <Navigation />}
      <Router>
        <Switch>
          <Route path="/register" component={RegisterPage} />
          <Route path="/login" component={LoginPage} />
          {isLoggedIn ? (
            <>
              <h1>Phonebook</h1>
              <ContactForm />
              <h2>Contacts</h2>
              <Filter />
              <ContactList />
            </>
          ) : (
            <Redirect to="/login" />
          )}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
