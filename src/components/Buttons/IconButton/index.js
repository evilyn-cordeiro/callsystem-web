import React from 'react';
// style
import { Container, IconStyle, LabelStyle } from './style';

export default function IconButton({
  // click event
  onClick,
  // button text
  label,
  // button icon
  icon,
  ...props
}) {
  return (
    <Container onClick={onClick} {...props}>
      <IconStyle>{icon}</IconStyle>
      <LabelStyle>{label}</LabelStyle>
    </Container>
  );
}
