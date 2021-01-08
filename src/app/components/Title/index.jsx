import React from 'react';
import { StyledTitle } from './styles';

const Title = ({ children, ...rest }) => {
  return (
    <StyledTitle level={5} {...rest}>
      {children}
    </StyledTitle>
  );
};

export default Title;
