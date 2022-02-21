import React, { useEffect, useState } from 'react';
// components
import { IconButton } from '../Buttons';
// style
import { Container, BoxTopStyled, BoxEndStyled } from './style';

export default function NavBar({
  // click event
  onClick,
  /**
  * Change the screen according
  * to the 'onClick' event
  */
  defaultScreen = 'Início',
}) {
  // UseState constant created to style the button.
  const [screen, setScreen] = useState(defaultScreen);
  // hook to change defaultScreen state.
  useEffect(() => {
    setScreen(defaultScreen);
  }, [defaultScreen]);

  /**
  * assigns a functionality to the button
  * to switch screens by assigning the "name".
  */
  function handleButtonClick(name) {
    setScreen(name);
    if (onClick) onClick(name);
  }

  return (
    <Container>
      <BoxTopStyled>
        texts
      </BoxTopStyled>
      <BoxEndStyled>
        <IconButton
          icon={(
            <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.25 32.5V22.75H22.75V32.5H30.875V19.5H35.75L19.5 4.875L3.25 19.5H8.125V32.5H16.25Z" fill="white" />
            </svg>
          )}
          label="Início"
          onClick={() => handleButtonClick('')}
          isActive={screen === ''}

        />
        <IconButton
          icon={(
            <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26 17.875C28.6975 17.875 30.8587 15.6975 30.8587 13C30.8587 10.3025 28.6975 8.125 26 8.125C23.3025 8.125 21.125 10.3025 21.125 13C21.125 15.6975 23.3025 17.875 26 17.875ZM13 17.875C15.6975 17.875 17.8587 15.6975 17.8587 13C17.8587 10.3025 15.6975 8.125 13 8.125C10.3025 8.125 8.125 10.3025 8.125 13C8.125 15.6975 10.3025 17.875 13 17.875ZM13 21.125C9.21375 21.125 1.625 23.0263 1.625 26.8125V30.875H24.375V26.8125C24.375 23.0263 16.7862 21.125 13 21.125ZM26 21.125C25.5288 21.125 24.9925 21.1575 24.4237 21.2063C26.3087 22.5713 27.625 24.4075 27.625 26.8125V30.875H37.375V26.8125C37.375 23.0263 29.7862 21.125 26 21.125Z" fill="white" />
            </svg>

          )}
          label="Cliente"
          onClick={() => handleButtonClick('profile')}
          isActive={screen === '/profile'}
        />
        <IconButton
          icon={(
            <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M31.1025 21.0209C31.161 20.5334 31.2 20.0264 31.2 19.4999C31.2 18.9734 31.161 18.4664 31.083 17.9789L34.3785 15.4049C34.671 15.1709 34.749 14.7419 34.5735 14.4104L31.4535 9.0089C31.2585 8.6579 30.849 8.5409 30.498 8.6579L26.6175 10.2179C25.7985 9.5939 24.9405 9.0869 23.985 8.6969L23.4 4.5629C23.3415 4.1729 23.01 3.8999 22.62 3.8999H16.38C15.99 3.8999 15.678 4.1729 15.6195 4.5629L15.0345 8.6969C14.079 9.0869 13.2015 9.6134 12.402 10.2179L8.52149 8.6579C8.17049 8.5214 7.76099 8.6579 7.56599 9.0089L4.44599 14.4104C4.25099 14.7614 4.32899 15.1709 4.64099 15.4049L7.93649 17.9789C7.85849 18.4664 7.79999 18.9929 7.79999 19.4999C7.79999 20.0069 7.83899 20.5334 7.91699 21.0209L4.62149 23.5949C4.32899 23.8289 4.25099 24.2579 4.42649 24.5894L7.54649 29.9909C7.74149 30.3419 8.15099 30.4589 8.50199 30.3419L12.3825 28.7819C13.2015 29.4059 14.0595 29.9129 15.015 30.3029L15.6 34.4369C15.678 34.8269 15.99 35.0999 16.38 35.0999H22.62C23.01 35.0999 23.3415 34.8269 23.3805 34.4369L23.9655 30.3029C24.921 29.9129 25.7985 29.3864 26.598 28.7819L30.4785 30.3419C30.8295 30.4784 31.239 30.3419 31.434 29.9909L34.554 24.5894C34.749 24.2384 34.671 23.8289 34.359 23.5949L31.1025 21.0209V21.0209ZM19.5 25.3499C16.2825 25.3499 13.65 22.7174 13.65 19.4999C13.65 16.2824 16.2825 13.6499 19.5 13.6499C22.7175 13.6499 25.35 16.2824 25.35 19.4999C25.35 22.7174 22.7175 25.3499 19.5 25.3499Z" fill="white" />
            </svg>
          )}
          label="Configurações"
          onClick={() => handleButtonClick('settings')}
          isActive={screen === '/settings'}
        />
      </BoxEndStyled>
    </Container>
  );
}