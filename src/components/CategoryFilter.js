/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Select } from '@mantine/core';

function CategoryFilter({ categories, onSelectHandler }) {
  const values = [];
  categories.map((category) => values.push(category.strCategory));
  console.log(values);
  return (
    <Select
      data={values.map((cat) => ({ value: cat, label: cat }))}
      placeholder="Pick Category"
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
};

const mapToState = (state) => ({
  categories: state.categories.categories.categories,
});

export default connect(mapToState)(CategoryFilter);
