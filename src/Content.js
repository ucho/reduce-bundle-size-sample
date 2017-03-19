import React from 'react';
import { Container } from 'reactstrap';

export function Content() {
  return (
    <Container>
      <h1>Reduce Bundle Size Sample</h1>
    </Container>
  );
}

export function Omitted() {
  return (
    <Container>
      <h1>This component will be omitted.</h1>
    </Container>
  );
}

export default Content;
