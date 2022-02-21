import React from 'react';
// components
import { Title } from '../../components';
// style
import { Container, HeaderStyle } from './style';

export default function Profile() {
  return (
    <Container>
      <HeaderStyle>
        <Title
          icon={(
            <svg width="30" height="30" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26 17.875C28.6975 17.875 30.8587 15.6975 30.8587 13C30.8587 10.3025 28.6975 8.125 26 8.125C23.3025 8.125 21.125 10.3025 21.125 13C21.125 15.6975 23.3025 17.875 26 17.875ZM13 17.875C15.6975 17.875 17.8587 15.6975 17.8587 13C17.8587 10.3025 15.6975 8.125 13 8.125C10.3025 8.125 8.125 10.3025 8.125 13C8.125 15.6975 10.3025 17.875 13 17.875ZM13 21.125C9.21375 21.125 1.625 23.0263 1.625 26.8125V30.875H24.375V26.8125C24.375 23.0263 16.7862 21.125 13 21.125ZM26 21.125C25.5288 21.125 24.9925 21.1575 24.4237 21.2063C26.3087 22.5713 27.625 24.4075 27.625 26.8125V30.875H37.375V26.8125C37.375 23.0263 29.7862 21.125 26 21.125Z" fill="black" />
            </svg>
          )}
          label="Cliente"
        />
      </HeaderStyle>

    </Container>
  );
}
