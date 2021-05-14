// @ts-nocheck
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Text, Image } from '@mantine/core';
import Loading from './Loading';
import NotFoundPage from './NotFound';
import getMealsByCategory from '../selectors';
import { loadMeals } from '../actions/index';

function CategoryMeals({
  category, loading, loadMeals, meals,
}) {
  useEffect(() => {
    loadMeals(category.strCategory);
  }, [category]);

  if (loading) {
    return <Loading />;
  }

  if (!category) {
    return <NotFoundPage />;
  }

  return (
    <div>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {meals.map((meal) => (
          <li key={meal.idMeal}>
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
  meals: PropTypes.arrayOf(PropTypes.object),
};

const mapToState = (state, ownProps) => ({
  category: getMealsByCategory(state, ownProps),
  meals: state.meals.meals.meals,
  loading: state.meals.loading,
});

export default connect(mapToState, { loadMeals })(CategoryMeals);
