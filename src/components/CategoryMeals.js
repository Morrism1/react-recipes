/* eslint-disable no-console */
// @ts-nocheck
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Text, Image } from '@mantine/core';
import { Link } from '@reach/router';
import Loading from './Loading';
import NotFoundPage from './NotFound';
import { getMealsByCategory } from '../selectors';
import { loadMeals, filter } from '../actions/index';
import './CategoryMeals.css';

function CategoryMeals({
  category, loading, loadMeals, meals, filterValue,
}) {
  useEffect(() => {
    if (filterValue === 'Current') {
      loadMeals(category.strCategory);
    } else {
      loadMeals(filterValue);
    }
  }, [filterValue]);

  if (loading) {
    return <Loading />;
  }

  if (!category) {
    return <NotFoundPage />;
  }

  return (
    <div className="mt-4">
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {meals.map((meal) => (
          <li key={meal.idMeal} className="card--shadow">
            <Link to={`/meals/${meal.idMeal}`}>
              <Card>
                <Image
                  src={meal.strMealThumb}
                  height={160}
                  alt="Noway"
                />

                <Text weight={500} size="lg">
                  {meal.strMeal}
                </Text>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

CategoryMeals.defaultProps = {
  strCategory: '',
  category: [],
  meals: [],
};

CategoryMeals.propTypes = {
  strCategory: PropTypes.string,
  category: PropTypes.objectOf(PropTypes.string),
  loading: PropTypes.bool.isRequired,
  loadMeals: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
  meals: PropTypes.arrayOf(PropTypes.object),
};

const mapToState = (state, ownProps) => ({
  category: getMealsByCategory(state, ownProps),
  meals: state.meals.meals.meals,
  loading: state.meals.loading,
  filterValue: state.filter.filter,
});

export default connect(mapToState, { loadMeals, filter })(CategoryMeals);
