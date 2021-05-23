/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Select } from '@mantine/core';

function CategoryFilter({ categories, onSelectHandler, filterValue }) {
  const values = [];
  categories.map((category) => values.push(category.strCategory));
  const defaultValue = 'Pick a category';

  return (
    <Select
      data={values.map((cat) => ({ value: cat, label: cat }))}
      placeholder={filterValue === 'Current' ? defaultValue : filterValue}
      variant="filled"
      onChange={(e) => onSelectHandler(e.target.value)}
    />
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
