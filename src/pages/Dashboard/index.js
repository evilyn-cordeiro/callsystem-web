import React from 'react';
// components
import { Title } from '../../components';
// style
import {
  Container, HeaderStyle, ContentStyle, SpanStyle,
  IconBtnStyle,
} from './style';

export default function Dashboard() {
  return (
    <Container>
      <HeaderStyle>
        <Title
          icon={(
            <svg width="30" height="30" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.25 32.5V22.75H22.75V32.5H30.875V19.5H35.75L19.5 4.875L3.25 19.5H8.125V32.5H16.25Z" fill="black" />
            </svg>
          )}
          label="Início"
        />
      </HeaderStyle>
      <ContentStyle>
        <SpanStyle>
          Nenhum Chamado Registrado...
          <IconBtnStyle
            icon={(
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="white" />
              </svg>
)}
            label="Novo"
          />
        </SpanStyle>
      </ContentStyle>
    </Container>
  );
}
