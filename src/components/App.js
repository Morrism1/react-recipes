// @ts-nocheck
import React from 'react';
import { MantineProvider, Container, theming } from '@mantine/core';
import { Router, Redirect } from '@reach/router';
import { createUseStyles } from 'react-jss';
import Categories from './Categories';
import './Categories.css';
import CategoryMeals from './CategoryMeals';

const useStyles = createUseStyles(
  () => ({
    '@global': {
      body: {
        backgroundColor: '#D8D8DD',
      },
    },
  }),
  { theming },
);
function App() {
  useStyles();
  return (
    <MantineProvider
      theme={{
        fontFamily: 'Inter, sans-serif',
        lineHeight: 1.2,
      }}
    >
      <Container size={1200} padding={0}>
        <Router>
          <Redirect noThrow from="/" to="/categories" />
          <Categories path="/categories" />
          <CategoryMeals path="/categories/:strCategory" />
        </Router>
      </Container>
    </MantineProvider>
  );
}

export default App;
