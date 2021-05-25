// @ts-nocheck
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { loadMealDetails } from '../actions/index';
import Loading from './Loading';
import NotFoundPage from './NotFound';

function MealData({
  mealData, meal, loading, loadMealDetails,
}) {
  useEffect(() => {
    loadMealDetails(meal.idMeal);
  }, [meal]);

  if (loading) {
    return <Loading />;
  }

  if (!meal || !mealData) {
    return <NotFoundPage />;
  }

  return (
    <section>
      {mealData.map((meal, i) => (
        i === 0 ? (
          <div className="relative mb-4" key={meal.idMeal}>
            <div className="flex flex-col md:flex-row border-2 border-opacity-30 border-gray-700 rounded-xl justify-between max-w-screen-xl mx-auto py-20 px-5 md:py-12 items-center">
              <div className="md:w-6/12 flex-shrink-0 relative">
                <img alt="" src={meal.strMealThumb} className="rounded-xl" />
              </div>
              <div className="md:w-6/12 mt-16 md:mt-0 md:mr-12 lg:mr-16 md:order-first">
                <div className="lg:py-8 text-center md:text-left">
                  <div className="mt-4 font-black lg:text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight text-gray-600">
                    {meal.strMeal}
                    <span className="px-2 py-1 ml-4 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                      {meal.strArea}
                    </span>
                  </div>
                  <div className="pl-6 mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100">
                    <div className="pl-8 py-4 my-4 text-center md:text-left text-sm md:text-base lg:text-lg font-semibold border-b-2 leading-relaxed text-secondary-100">Instructions</div>
                    {meal.strInstructions.split(/\d+[.]\s/).map((el, idx) => (
                      <div className="flex mb-3" key={el.length}>
                        <div className="mr-5 border-r-2 border-green-600 text-gray-600 pr-3">{idx + 1}</div>
                        <div>{el}</div>
                      </div>
                    ))}
                    <div className="pl-8 py-4 my-4 text-center md:text-left text-sm md:text-base lg:text-lg font-semibold border-b-2 leading-relaxed text-secondary-100">Ingredients</div>
                    <ul className="list-none pl-8">
                      <li>
                        {meal.strIngredient1}
                        {' '}
                        :
                        {' '}
                        {meal.strMeasure1}
                      </li>
                      <li>
                        {meal.strIngredient2}
                        {' '}
                        :
                        {' '}
                        {meal.strMeasure2}
                      </li>
                      <li>
                        {meal.strIngredient3}
                        {' '}
                        :
                        {' '}
                        {meal.strMeasure3}
                      </li>
                      <li>
                        {meal.strIngredient4}
                        {' '}
                        :
                        {' '}
                        {meal.strMeasure4}
                      </li>
                      <li>
                        {meal.strIngredient5}
                        {' '}
                        :
                        {' '}
                        {meal.strMeasure5}
                      </li>
                      <li>
                        {meal.strIngredient6}
                        {' '}
                        :
                        {' '}
                        {meal.strMeasure6}
                      </li>
                      <li>
                        {meal.strIngredient7}
                        {' '}
                        :
                        {' '}
                        {meal.strMeasure7}
                      </li>
                      <li>
                        {meal.strIngredient8}
                        {' '}
                        :
                        {' '}
                        {meal.strMeasure8}
                      </li>
                      <li>
                        {meal.strIngredient9}
                        {' '}
                        :
                        {' '}
                        {meal.strMeasure9}
                      </li>
                      <li>
                        {meal.strIngredient10}
                        {' '}
                        :
                        {' '}
                        {meal.strMeasure10}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (<p> </p>)))}
    </section>
  );
}

MealData.defaultProps = {
  mealData: [],
  meal: [],
};

MealData.propTypes = {
  mealData: PropTypes.arrayOf(PropTypes.object),
  meal: PropTypes.objectOf(PropTypes.string),
  loading: PropTypes.bool.isRequired,
  loadMealDetails: PropTypes.func.isRequired,
};

const MapToState = (state, ownProps) => ({
  mealData: state.mealData.mealData.meals,
  meals: state.meals.meals.meals,
  meal: state.meals.meals.meals.find((meal) => meal.idMeal === ownProps.idMeal),
  loading: state.mealData.loading,
});

export default connect(MapToState, { loadMealDetails })(MealData);
