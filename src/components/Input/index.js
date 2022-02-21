import React from 'react';
// style
import { Container, InputStyle, LabelStyled } from './style';

export default function Input({
  label,
  ...props
}) {
  return (
    <Container>
      <LabelStyled>{label}</LabelStyled>
      <InputStyle />
    </Container>
  );
}
