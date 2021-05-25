// @ts-nocheck
import React from 'react';
import { MantineProvider, Container } from '@mantine/core';
import { Router, Redirect, LocationProvider } from '@reach/router';
import Categories from './Categories';
import './Categories.css';
import CategoryMeals from './CategoryMeals';
import MealData from './MealData';
import Navbar from './Navbar';

function App() {
  return (
    <MantineProvider>
      <Container size={1200} padding={12}>
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
