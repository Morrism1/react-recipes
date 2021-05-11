import axios from 'axios';

const getCategories = async () => {
  const data = await axios.get('/categories.php').then((res) => res);

  return data.data;
};

export default getCategories;
