// @ts-nocheck
import React from 'react';
import { MantineProvider, Container, theming } from '@mantine/core';
import { Router, Redirect, LocationProvider } from '@reach/router';
import { createUseStyles } from 'react-jss';
import Categories from './Categories';
import './Categories.css';
import CategoryMeals from './CategoryMeals';
import MealData from './MealData';
import Navbar from './Navbar';

const useStyles = createUseStyles(
  () => ({
    '@global': {
      body: {
        backgroundColor: '#fefefe',
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
        <LocationProvider>
          <Navbar />
        </LocationProvider>

        <Router>
          <Redirect noThrow from="/" to="/home" />
          <Categories path="/home" />
          <CategoryMeals path="/categories/:strCategory" />
          <MealData path="/meals/:idMeal" />
        </Router>
      </Container>
    </MantineProvider>
  );
}

export default App;
