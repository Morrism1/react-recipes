import axios from 'axios';

const getCategories = async () => {
  const data = await axios.get('/categories.php').then((res) => res);

  return data.data;
};

const getMeals = async (categoryName) => {
  const data = await axios.get(`/filter.php?c=${categoryName}`).then((res) => res);

  return data.data;
};

export { getCategories, getMeals };
