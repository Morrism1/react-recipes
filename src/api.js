import axios from 'axios';

const PREFIX = 'https://www.themealdb.com/api/json/v1/1';

const getCategories = async () => {
  const data = await axios.get(`${PREFIX}/categories.php`).then((res) => res);

  return data.data;
};

const getMeals = async (categoryName) => {
  const data = await axios.get(`${PREFIX}/filter.php?c=${categoryName}`).then((res) => res);

  return data.data;
};

const getMealData = async (idMeal) => {
  const data = await axios.get(`${PREFIX}/lookup.php?i=${idMeal}`).then((res) => res);

  return data.data;
};

export { getCategories, getMeals, getMealData };
