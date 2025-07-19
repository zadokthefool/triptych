import React from 'react';
import { LinearProgress } from '@mui/material';
import styled from '@emotion/styled';

const Loading: React.FC = () => (
  <Container>
    <LinearProgress />
  </Container>
);

export default Loading;

const Container = styled.div`
  width: 100%;
`;
