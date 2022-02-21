import React from 'react';
// style
import {
  Container, Box, LabelStyle,
} from './style';

export default function Title({
  // text component
  label,
  // icon component
  icon,
}) {
  return (
    <Container>
      <Box>
        {icon}
        <LabelStyle>{label}</LabelStyle>
      </Box>
    </Container>
  );
}
