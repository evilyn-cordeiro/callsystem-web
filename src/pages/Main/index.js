import React from 'react';
// routers
import {
  Switch, Route,
} from 'react-router-dom';
// style
import {
  Container, Content, Aside, CentralContent,
} from './style';

export default function Main() {
  return (
    <Container>
      <Aside />
      <CentralContent>
        <Content>
          <Switch>
            <Route />
          </Switch>
        </Content>
      </CentralContent>
    </Container>
  );
}
