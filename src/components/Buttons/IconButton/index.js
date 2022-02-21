import React from 'react';
// style
import {
  Container, IconStyle, LabelStyle, BoxCenterStyle,
} from './style';

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
      <BoxCenterStyle>
        <IconStyle>{icon}</IconStyle>
        <LabelStyle>{label}</LabelStyle>
      </BoxCenterStyle>

    </Container>
  );
}
