import React from 'react';
import { Route, Switch } from 'react-router-dom' 
import NavBar from './NavBar';
import NotFound from './NotFound';
import Counter from '../routes/counter/Counter';
import UserContent from '../routes/userApp/UserContent';
import EmojiForm from '../routes/emojiSearch/EmojiForm';
import HomePage from './HomePage';
import './Navigation.scss';

const Navigation = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/counter">
          <Counter />
        </Route>

        <Route path="/post_app">
          <UserContent />
        </Route>

        <Route path="/emoji">
          <EmojiForm />
        </Route>

        <Route>
          <NotFound />
        </Route>

      </Switch>
        
    </>

  )
};

export default Navigation;