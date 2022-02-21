import React, { useEffect, useState } from 'react';
import reactDom from 'react-dom';
import {
  Switch, Route, useHistory, Redirect,
} from 'react-router-dom';
// pages
import {
  Dashboard, Profile, Calls, Settings,
} from '..';
// components
import { TabNavigator } from '../../components';
// style
import {
  Container, Content, Aside,
} from './style';

export default function Main() {
  /**
   * inspect the page title and join
   * with the value assigned to the function.
   */
  function handleTitleDom(value) {
    reactDom.render(
      `Call System - ${value}`,
      document.getElementById('title'),
    );
  }
  const history = useHistory();
  // set the page url.
  const [location, setLocation] = useState('');
  /**
   *  useEffect which maintains state
   * according to the location of the page 'URL'.
   */
  useEffect(() => {
    switch (history.location.pathname) {
      case '/profile':
        setLocation('profile');
        /**
         * value assigned to the function
         * to identify the page by name.
         */
        handleTitleDom('Cliente');
        break;
      case '/calls':
        setLocation('resultado');
        handleTitleDom('Chamados');
        break;
      case '/settings':
        setLocation('settings');
        handleTitleDom('Configurações');
        break;
      default:
        setLocation('');
        handleTitleDom('Início');
        break;
    }
  }, []);

  // function to use the hook.
  function handleRegisterPress(name) {
    // using the hook with the page link.
    history.push(`/${name}`);
    handleTitleDom(name);
  }

  return (
    <Container>
      <Aside>
        <TabNavigator
          onClick={(name) => handleRegisterPress(name)}
          defaultScreen={location}
        />
      </Aside>
      <Content>
        <Switch>
          <Redirect from="/dashboard" to="/" />
          <Route
            exact
            path="/"
            component={Dashboard}
          />
          <Route
            exact
            path="/calls"
            component={Calls}
          />
          <Route
            exact
            path="/profile"
            component={Profile}
          />
          <Route
            exact
            path="/settings"
            component={Settings}
          />
        </Switch>
      </Content>
    </Container>
  );
}
