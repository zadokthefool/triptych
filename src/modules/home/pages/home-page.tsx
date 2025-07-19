import React, { useState } from 'react';
import { Alert } from '@mui/material';
import styled from '@emotion/styled';
import { theme } from '@styles/theme';
import { getContrastColor } from '@utils';

const HomePage: React.FC = () => {
  const [error, _setError] = useState<boolean>(false);

  return (
    <Container>
      {error && <Alert severity="error">{error}</Alert>}
      Hello
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  *::selection {
    background-color: ${theme.yellow}; /* Your desired highlight background */
    color: ${getContrastColor(theme.yellow)};
  }
`;
