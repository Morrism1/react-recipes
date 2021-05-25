import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function CategoryFilter({ categories, onSelectHandler, filterValue }) {
  const values = [];
  categories.map((category) => values.push({
    value: category.strCategory,
    label: category.strCategory,
    avatar: category.strCategoryThumb,
  }));

  const defaultValue = 'Pick a category';
  return (
    <div className="block">
      <select placeholder="Pick a category" className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-offset-yellow-400 focus:border-yellow-400 sm:text-sm" onChange={(e) => onSelectHandler(e.target.value)} defaultValue="Pick a category">
        <option defaultValue="" hidden>
          {filterValue === 'Current' ? defaultValue : filterValue}
        </option>
        {values.map((user) => (
          <option key={`${user.value}`} value={user.value} className="flex items-center">
            {user.value}
          </option>
        ))}
      </select>
    </div>
  );
}

CategoryFilter.defaultProps = {
  categories: [],
};

CategoryFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  onSelectHandler: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
};

const mapToState = (state) => ({
  categories: state.categories.categories.categories,
  filterValue: state.filter.filter,
});

export default connect(mapToState)(CategoryFilter);
